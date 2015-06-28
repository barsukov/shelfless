class BookRequest < ActiveRecord::Base
  attr_accessible :book, :state, :book_id, :extension_state, :reader_id, :holder_id, :reader, :holder

  belongs_to :book
  belongs_to :reader, class_name: "Account"
  belongs_to :holder, class_name: "Account"

  scope :get_reader_requests_by_account, -> (account) { where(:reader => account).order(updated_at: :desc)}
  scope :get_holder_requests_by_account, -> (account) { where(:holder => account).order(updated_at: :desc)}
  scope :get_accepted_active_book_request, -> (book) { where(book: book).where(state: 1)
    .where(self.arel_table[:expired_date].gt(DateTime.now))}
  delegate :title, to: :book, allow_nil: true
  delegate :author_name, to: :book, allow_nil: true
  delegate :city, to: :holder, allow_nil: true, prefix: true
  delegate :category_name, to: :book, allow_nil: true
  delegate :full_name, to: :holder, allow_nil: true, prefix: true
  delegate :full_name, to: :reader, allow_nil: true, prefix: true

  after_create :new_request_notify_holder

  def status
    self.human_state_name
  end

  def destroy_holder_notification
    request_set = Sidekiq::ScheduledSet.new
    jobs = request_set.select{|job| job.jid == self.queue_id }
    jobs.each(&:delete)
  end

  def days_to_return
    (expired_date - Time.zone.now).to_i / 1.day if expired_date?
  end

  state_machine :state do
    after_transition :pending => :accepted do |book_request, transition, block|
      book_request.create_holder_return_notification(book_request)
      book_request.book.unshare!
      BookRequestMailer.delay.accepted(book_request)
    end

    after_transition :accepted => :returned do |book_request, transition, block|
      book_request.book.share! if book_request.book.unshared?
      book_request.destroy_holder_notification
    end

    after_transition :pending => :declined do |book_request, transition, block|
      BookRequestMailer.delay.declined(book_request)
    end

    event :accept do
      transition :pending => :accepted
    end

    event :mark_returned do
      transition :accepted => :returned
    end

    event :decline do
      transition :pending => :declined
    end

    event :gift do
      transition :pending => :accepted
    end

    state :returned, :value => 3
    state :gifted, :value => 3
    state :declined, :value => 2
    state :accepted, :value => 1
    state :pending, :value => 0

  end

  state_machine :extension_state do
    after_transition any => :pending_extension do |book_request, transition, block|
      BookRequestMailer.delay.ask_extend_request_notify_holder(book_request)
    end

    after_transition :pending_extension => :extended do |book_request, transition, block|
      book_request.create_holder_return_notification(book_request)
      book_request.notify_reader_about_extenstion(book_request)
    end

    after_transition :initial_extension => :returned_now, :pending_extension => :declined_extension do |book_request, transition, block|
      BookRequestMailer.delay.notify_reader_return_book(book_request)
    end

    event :ask_extend_book do
      transition [:initial_extension, :returned_now, :extended] => :pending_extension
    end

    event :extend_book do
      transition :pending_extension => :extended
    end

    event :return_now do
      transition :initial_extension => :returned_now
    end

    event :decline_extension do
      transition :pending_extension => :declined_extension
    end

    event :expire_extend do
      transition :extended => :initial_extension
    end

    state :declined_extension, :value => 4
    state :extended, :value => 3
    state :returned_now, :value => 2
    state :pending_extension, :value => 1
    state :initial_extension, :value => 0

  end

  def create_holder_return_notification(book_request)
    # This is really big shit in my code please remove or forgive
    # This is need during the test processing without sstaging and USE HEroku varible
    # Than I can easily remove this shit after we test shelfless
    expired_date = Settings.return_time

    if ENV["RETURN_TIME"]
      expired_date = eval(ENV["RETURN_TIME"])
    end

    book_request.expired_date = expired_date
    jid = BookRequestMailer.delay_until(book_request.expired_date).expired_request_notify_holder(book_request)
    book_request.queue_id = jid
    book_request.save
  end

  def notify_reader_about_extenstion(book_request)
    BookRequestMailer.delay.notify_reader_extend_book(book_request)
  end

  def new_request_notify_holder
    BookRequestMailer.delay.new_request_notify_holder(self)
  end
end

class BookRequest < ActiveRecord::Base
  attr_accessible :book, :state, :book_id, :reader_id, :holder_id, :reader, :holder

  belongs_to :book
  belongs_to :reader, class_name: "Account"
  belongs_to :holder, class_name: "Account"

  scope :get_reader_requests_by_account, -> (account) { where(:reader => account).order(updated_at: :desc)}
  scope :get_holder_requests_by_account, -> (account) { where(:holder => account).order(updated_at: :desc)}

  delegate :title, to: :book, allow_nil: true
  delegate :author_name, to: :book, allow_nil: true
  delegate :postcode, to: :holder, allow_nil: true, prefix: true
  delegate :category_name, to: :book, allow_nil: true
  delegate :full_name, to: :holder, allow_nil: true, prefix: true
  delegate :full_name, to: :reader, allow_nil: true, prefix: true

  after_create :new_request_notify_holder

  def status
    self.human_state_name
  end

  state_machine :state do
    after_transition :pending => :accepted do |book_request, transition, block|
      book_request.book.unshare!
      BookRequestMailer.delay.accepted(book_request)
      BookRequestMailer.delay_until(Settings.return_time).expired_request_notify_holder(book_request)
    end
    after_transition :pending => :declined do |book_request, transition, block|
      BookRequestMailer.delay.declined(book_request)
    end
    event :accept do
      transition :pending => :accepted
    end
    event :decline do
      transition :pending => :declined
    end
    event :gift do
      transition :pending => :accepted
    end
    state :gifted, :value => 3
    state :declined, :value => 2
    state :accepted, :value => 1
    state :pending, :value => 0
  end

  private
    def new_request_notify_holder
      BookRequestMailer.delay.new_request_notify_holder(self)
    end
end

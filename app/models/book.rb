class Book < ActiveRecord::Base
  include PgSearch

  pg_search_scope :search_book, against: [:title, :language], :using => {
    :tsearch => {:prefix => true}
  }, associated_against: {author: [:name], category: [:name], account: [:city] }

  attr_accessible :title, :author, :category, :state, :state_event, :language,
    :account_id, :category_id, :author_id, :category_attributes, :author_attributes
  validates :title, presence: true

  belongs_to :category
  belongs_to :author
  belongs_to :account
  has_many :book_requests
  delegate :name, to: :author, allow_nil: true, prefix: true
  delegate :city, to: :account, allow_nil: true, prefix: true
  delegate :name, to: :category, allow_nil: true, prefix: true
  accepts_nested_attributes_for :category
  accepts_nested_attributes_for :author

  def reader_name
    reader_full_name = book_requests.where(:state => 1 ).first.try(:reader_full_name)
    unless reader_full_name
      reader_full_name = I18n.t('book.no_reader')
    end
    reader_full_name
  end

  def status
    self.human_state_name
  end

  def cancel_holder_notification(book = self)
    @request = BookRequest.get_accepted_active_book_request(book).first
    @request.destroy_holder_notification if @request
  end

  state_machine :state do
    after_transition :shared => :unshared do |book, transition, block|
      book.book_requests.where(:state => 0).map(&:decline)
    end
    event :share do
      transition :unshared => :shared
    end
    event :unshare do
      transition :shared => :unshared
    end
    state :shared, :value => 0
    state :unshared, :value => 1
  end

end

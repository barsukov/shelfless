class Book < ActiveRecord::Base
  attr_accessible :title, :postcode, :state, :author_id, :category_id, :account_id
  validates :title, :postcode , presence: true

  belongs_to :category
  belongs_to :author
  belongs_to :account
  has_many :book_requests
  delegate :name, to: :author, allow_nil: true, prefix: true
  delegate :name, to: :category, allow_nil: true, prefix: true

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

  state_machine :state do
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

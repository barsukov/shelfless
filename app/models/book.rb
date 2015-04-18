class Book < ActiveRecord::Base
  attr_accessible :title, :postcode, :state, :author_id, :category_id, :account_id
  validates :title, :postcode , presence: true

  belongs_to :category
  belongs_to :author
  belongs_to :account
  has_many :book_requests

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

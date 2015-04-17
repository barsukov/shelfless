class Book < ActiveRecord::Base
  attr_accessible :title, :postcode, :share, :author_id, :category_id, :account_id
  belongs_to :category
  belongs_to :author
  belongs_to :account
  has_many :book_requests
end

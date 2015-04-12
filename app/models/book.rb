class Book < ActiveRecord::Base
  attr_accessible :title, :postcode, :share, :swap, :author_id, :category_id, :account_id
  belongs_to :category
  belongs_to :author
  belongs_to :account
end

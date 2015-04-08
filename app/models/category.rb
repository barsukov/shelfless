class Category < ActiveRecord::Base
  attr_accessible :name, :books_ids
  has_many :books
end

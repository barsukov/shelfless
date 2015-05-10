class Author < ActiveRecord::Base
  attr_accessible :name, :books_ids
  validates :name, presence: true
  has_many :books
end

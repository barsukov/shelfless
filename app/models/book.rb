class Book < ActiveRecord::Base
  attr_accessible :title, :postcode, :share, :swap, :category_id
  belongs_to :category
end

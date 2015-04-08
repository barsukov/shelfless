class Book < ActiveRecord::Base
  attr_accessible :title, :postcode, :share, :swap, :author_id, :category_id, :owner_id
  belongs_to :category
  belongs_to :author
  belongs_to :owner, class_name: "User", foreign_key: "owner_id"
end

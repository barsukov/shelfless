class BookRequest < ActiveRecord::Base
  belongs_to :book
  belongs_to :reader, class_name: "Account"
  belongs_to :holder, class_name: "Account"
end

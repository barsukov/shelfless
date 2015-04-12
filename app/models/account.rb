class Account < ActiveRecord::Base
  attr_accessible :user_id, :name, :surname
  belongs_to :user
  has_many :books
end

class Account < ActiveRecord::Base
  attr_accessible :user_id, :name, :surname, :city
  belongs_to :user
  has_many :books

  has_many :book_reader_request, :class_name => "BookRequest", :foreign_key => "reader_id"
  has_many :book_holder_request, :class_name => "BookRequest", :foreign_key => "holder_id"
  delegate :email, to: :user, prefix: true

  def full_name
    name.to_s + " " + surname.to_s
  end

end

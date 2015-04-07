class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :rememberable, :trackable, :validatable
  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :role
  # attr_accessible :title, :body

  ROLES = [ :admin, :user, :guest].freeze

  validates :role, :presence => true, :inclusion => { :in => ROLES + ROLES.map(&:to_s) }

  def password=(val)
    val.blank? ? return : super(val)
  end

  def role
    super && super.to_sym
  end
end

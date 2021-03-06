class User < ActiveRecord::Base
  TEMP_EMAIL_PREFIX = 'change@me'
  TEMP_EMAIL_REGEX = /\Achange@me/
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,:recoverable, :rememberable, :registerable , :trackable,
    :validatable, :omniauthable, :confirmable, :omniauth_providers => [:facebook]
  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :account_attributes,
    :password_confirmation, :remember_me, :role, :books_ids
  # attr_accessible :title, :body

  ROLES = [ :admin, :user, :guest].freeze

  validates :role, :presence => true, :inclusion => { :in => ROLES + ROLES.map(&:to_s) }
  has_one :identity, dependent: :destroy
  has_one :account, dependent: :destroy
  delegate :name, to: :account, allow_nil: true
  delegate :city, to: :account, allow_nil: true
  delegate :id, to: :account, allow_nil: true, prefix: true
  delegate :surname, to: :account, allow_nil: true
  accepts_nested_attributes_for :account

  def self.from_omniauth(auth)
    # Get the identity and user if they exist
    identity = Identity.find_for_oauth(auth)
    user = identity.user
    # Create the user if needed
    if user.nil?

      # Get the existing user by email if the provider gives us a verified email.
      # If no verified email was provided we assign a temporary email and ask the
      # user to verify it on the next step via UsersController.finish_signup
      email_is_verified = auth.info.email && (auth.info.verified || auth.info.verified_email)
      email = auth.info.email if email_is_verified
      user = User.where(:email => email).first if email

      # Create the user if it's a new registration
      if user.nil?
        account = Account.new(name: auth.extra.raw_info.first_name,
          surname: auth.extra.raw_info.last_name, city: Settings.default_city)
        user = User.new(
          email: email ? email : "#{TEMP_EMAIL_PREFIX}-#{auth.uid}-#{auth.provider}.com",
          password: Devise.friendly_token[0,20]
        )
        user.build_account
        user.account = account
        user.skip_confirmation!
        user.save!
      end
    end

    # Associate the identity with the user if needed
    if identity.user != user
      identity.user = user
      identity.save!
    end
    user
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  def password=(val)
    val.blank? ? return : super(val)
  end

  def role
    super && super.to_sym
  end
end

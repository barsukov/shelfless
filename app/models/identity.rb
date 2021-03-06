class Identity < ActiveRecord::Base
  belongs_to :user
  attr_accessible :uid, :provider
  def self.find_for_oauth(auth)
    find_or_create_by(uid: auth.uid, provider: auth.provider)
  end
end

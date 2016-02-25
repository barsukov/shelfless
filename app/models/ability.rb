class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, :all                   # allow everyone to read everything
    cannot :access, :rails_admin
    cannot :access, :single_page_application       # only allow admin users to access Rails Admin
  end
end

class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, :all                   # allow everyone to read everything
    cannot :access, :rails_admin
    cannot :access, :new_interface       # only allow admin users to access Rails Admin
  end
end

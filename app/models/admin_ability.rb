class AdminAbility
  include CanCan::Ability

  def initialize(user)
    if user
      can :read, :all                   # allow everyone to read everything
      if user.role == :admin
        can :manage, :all               # allow admins to do anything
      end
    end
  end

end

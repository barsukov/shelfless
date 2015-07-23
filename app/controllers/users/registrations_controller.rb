class Users::RegistrationsController < Devise::RegistrationsController

  def create
    super
    unless resource.account
      city = params["user"]["city"] || Settings.default_city
      account = Account.new(name: params["user"]["name"] ,
        surname: params["user"]["surname"], city: city)
      resource.build_account
      resource.account = account
      resource.save
    end
  end

  protected
    def after_sign_up_path_for(resource)
      books_path
    end

    def after_inactive_sign_up_path_for(resource)
      books_path
    end

    def after_update_path_for(resource)
      books_path
    end
end

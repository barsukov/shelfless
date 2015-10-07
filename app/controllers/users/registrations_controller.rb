class Users::RegistrationsController < Devise::RegistrationsController

  def new
    build_resource({})
    self.resource.account = Account.new
    respond_with self.resource
  end

  def create
    super
  end

   private
     def sign_up_params
       allow = [:email, :password, :password_confirmation, :account,
         [account_attributes: [:city, :name, :surname]]]
       params.require(resource_name).permit(allow)
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

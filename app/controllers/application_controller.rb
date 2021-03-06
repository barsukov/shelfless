class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  rescue_from CanCan::AccessDenied do |exception|
    redirect_to main_app.books_path, :alert => exception.message
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || url_for("/single_page_application/books")
  end

  def after_sign_out_path_for(resource)
    stored_location_for(resource) || root_path
  end
end

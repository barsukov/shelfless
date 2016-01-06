class SinglePageApplicationController < ApplicationController
  layout 'single_page_application'
  before_action :admin_authenticate

  def index
    respond_to do |format|
      format.html { render :index }
    end
  end

  def admin_authenticate
    unless current_user && (current_user.role == :admin)
      raise CanCan::AccessDenied.new(I18n.t('notice.restricted'))
    end
  end
end

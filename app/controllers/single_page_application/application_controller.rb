class SinglePageApplication::ApplicationController < ApplicationController
  before_action :admin_authenticate

  def index
    respond_to do |format|
      format.html { render :index }
    end
  end

  def preflight
    render nothing: true
  end

  def admin_authenticate
    unless current_user && (current_user.role == :admin)
      raise CanCan::AccessDenied.new(I18n.t('notice.restricted'))
    end
  end
end

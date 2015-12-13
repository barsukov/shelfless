class NewBooksController < ApplicationController
  layout 'new_interface'
  before_action :admin_authenticate

  def index
    @page = params[:page]
    @books = Book.all.paginate(:page => params[:page], :per_page => 30)
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @books }
    end
  end

  def admin_authenticate
    unless current_user && (current_user.role == :admin)
      raise CanCan::AccessDenied.new(I18n.t('notice.restricted'))
    end
  end
end

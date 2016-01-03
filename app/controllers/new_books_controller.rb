class NewBooksController < ApplicationController
  layout 'new_interface'
  before_action :admin_authenticate

  def index
    @books = Book.all.paginate(:page => params[:page], :per_page => 10)
    respond_to do |format|
      format.html { render :index }
      format.json do
        render json: {
          books: @books.map{|b| BookSerializer.new(b,root: false)}.as_json,
          page: params[:page]
        }
      end
    end
  end

  def admin_authenticate
    unless current_user && (current_user.role == :admin)
      raise CanCan::AccessDenied.new(I18n.t('notice.restricted'))
    end
  end
end

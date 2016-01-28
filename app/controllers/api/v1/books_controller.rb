class Api::V1::BooksController < SinglePageApplicationController
  skip_before_filter :verify_authenticity_token, only: :search
  def index
    @books = Book.all.paginate(:page => params[:page], :per_page => 10)
    respond_to do |format|
      format.json do
        render json: {
          books: @books.map{|b| BookSerializer.new(b,root: false)}.as_json,
          page: params[:page]
        }
    end
    end
  end

  def search
    @books = Book.search_book(params[:search_term])
    respond_to do |format|
      format.json do
        render json: {
          books: @books.map{|b| BookSerializer.new(b,root: false)}.as_json,
          page: params[:page]
        }
      end
    end
  end
end

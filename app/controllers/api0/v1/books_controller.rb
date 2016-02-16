class SinglePageApplication::Api::V1::BooksController < SinglePageApplication::ApplicationController
  skip_before_filter :verify_authenticity_token, only: :search

  def render_books(books, page)
    respond_to do |format|
      format.json do
        render json: {
          books: books.map{|b| BookSerializer.new(b, root: false)}.as_json,
          page: page,
          hasMoreItems: books.current_page < books.total_pages
        }
      end
    end
  end

  def index
    page = params[:page] || 1
    books = Book.all.paginate(:page => page, :per_page => 10)
    render_books books, page
  end

  def search
    page = params[:page] || 1
    books = Book.search_book(params[:search_term]).paginate(:page => page, :per_page => 10)
    render_books books, page
  end
end

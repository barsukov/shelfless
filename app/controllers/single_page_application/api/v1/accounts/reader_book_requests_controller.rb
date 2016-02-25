class SinglePageApplication::Api::V1::Accounts::ReaderBookRequestsController < SinglePageApplication::ApplicationController
  include AccountKeeper
  skip_before_filter :verify_authenticity_token, only: :create
  # POST /books
  # POST /books.json
  def create
    @book = Book.find(book_request_params[:book_id])
    @account = Account.find(params[:account_id])
    @book_request = BookRequest.new(book: @book, reader: @account, holder: @book.account)
    respond_to do |format|
      if @book_request.save
        format.json {
          render json:
            {
              book_id: @book_request.book_id,
              book_request_state: @book_request.state_name
            }
        }
      else
        format.json { render json: @book_request.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def book_request_params
      params[:reader_book_request]
    end
end

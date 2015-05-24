class Accounts::ReaderBookRequestsController < ApplicationController
  include AccountKeeper
  include BookParams

  # GET /books
  # GET /books.json
  def index
    @reader_requests = BookRequest.get_reader_requests_by_account(@account).paginate(page: params[:page])
  end

  # GET /books/1
  # GET /books/1.json
  def show
  end

  # GET /books/new
  def new
    @book_request = BookRequest.new(book: @book, reader: @account, holder: @book.account)
  end

  def ask_extend
    book_request = BookRequest.find(params[:id])
    book_request.ask_extend_book
    redirect_to account_reader_book_requests_path, notice: 'You asked extension.'
  end

  # GET /books/1/edit
  def edit
  end

  # POST /books
  # POST /books.json
  def create
    @book_request = BookRequest.new(book_request_params)
    respond_to do |format|
      if @book_request.save
        format.html { redirect_to account_reader_book_requests_path, notice: 'Book request was successfully created.' }
        format.json { render :show, status: :created, location: @book }
      else
        format.html { render :new }
        format.json { render json: @book_request.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book_request.destroy
    respond_to do |format|
      format.html { redirect_to books_url, notice: 'Book request was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def book_request_params
      params[:book_request]
    end
end

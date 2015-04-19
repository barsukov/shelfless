class Accounts::HolderBookRequestsController < ApplicationController
  include AccountParams
  before_action :set_book_request, except: [:index]
  # GET /books
  # GET /books.json
  def index
    @reader_requests = BookRequest.get_holder_requests_by_account(@account).paginate(page: params[:page])
  end

  # GET /books/1
  # GET /books/1.json
  def show
  end

  # GET /books/1/edit
  def edit
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    respond_to do |format|
      if @book_request.accept
        notice = 'Book request was successfully updated.'
      else
        notice = 'Something goes wrong'
      end
        format.html { redirect_to :back, notice: notice }
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book_request.decline
    respond_to do |format|
      format.html { redirect_to :back, notice: 'Book request was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_book_request
      @book_request = BookRequest.find(params[:id])
    end
end

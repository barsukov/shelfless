class Accounts::HolderBookRequestsController < ApplicationController
  include AccountKeeper
  before_action :set_book_request, except: [:index]
  # GET /books
  # GET /books.json
  def index
    @reader_requests = BookRequest.get_holder_requests_by_account(@account).paginate(page: params[:page])
  end

  def accept
    update
  end

  def decline
    destroy
  end

  def extend
    @book_request.extend_book()
    respond_to do |format|
      format.html { redirect_to @book_request.book, notice: I18n.t('book.extended') }
    end
  end

  def return_now
    BookRequestMailer.delay.notify_reader_return_book(@book_request)
    respond_to do |format|
      format.html { redirect_to @book_request.book, notice: I18n.t('book.requested_return') }
    end
  end

  def mark_returned
    @book_request.return_book
    respond_to do |format|
      format.html { redirect_to @book_request.book, notice: I18n.t('book.returned') }
    end
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
      format.html { redirect_to account_holder_book_requests_url, notice: notice }
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book_request.decline
    respond_to do |format|
      format.html { redirect_to account_holder_book_requests_url, notice: I18n.t('book_request.was_declined') }
      format.json { head :no_content }
    end
  end

  private
    def set_book_request
      @book_request = BookRequest.find(params[:id])
    end
end

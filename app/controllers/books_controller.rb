class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]
  # GET /books
  # GET /books.json
  def index
    @title = params[:q][:title] if params[:q].present?
    @q = Book.ransack(title_cont: @title)
    @books = @q.result.includes(:category, :author).page(params[:page])
  end

  def search
    index
    render :index
  end

  # GET /books/1
  # GET /books/1.json
  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params[:book]
    end
end

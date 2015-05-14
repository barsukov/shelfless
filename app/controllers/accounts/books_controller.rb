class Accounts::BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]
  before_action :set_collections, only: [:edit, :new]
  before_action :set_author, only: [:create, :update]
  before_action :set_category, only: [:create, :update]

  include AccountKeeper

  # GET /books
  # GET /books.json
  def index
    @books = Book.where(account: @account).paginate(:page => params[:page])
  end

  # GET /books/1
  # GET /books/1.json
  def show
  end

  # GET /books/new
  def new
    @book = Book.new
  end


  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)
    @book.author = @author
    @book.category = @category
    respond_to do |format|
      if @book.save
        format.html { redirect_to @book, notice: 'Book was successfully created.' }
        format.json { render :show, status: :created, location: @book }
      else
        format.html { render :new, :flash => { :error => @book.errors.first }}
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    respond_to do |format|
      params[:book][:author_id] = @author.id
      params[:book][:category_id] = @category.id
      if @book.update(book_params)
        if @book.shared?
          @book.cancel_holder_notification
        end
        format.html { redirect_to account_book_path(@account, @book), notice: 'Book was successfully updated.' }
        format.json { render :show, status: :ok, location: @book }
      else
        format.html { render :edit }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
    respond_to do |format|
      format.html { redirect_to account_books_path(@account), notice: 'Book was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_collections
      @authors = Author.all
      @categories = Category.all
    end

    def set_author
      @author =  Author.find_or_create_by(name: params[:book][:author_name])
    end

    def set_category
      @category = Category.find_or_create_by(name: params[:book][:category_name])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params[:book].permit(:id, :title,:state, :account_id, :author_id, :category_id, :author_name, :category_name)
    end
end

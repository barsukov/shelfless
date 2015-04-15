class Users::BooksController < AppliactionController
  def index
    @books = Books.where(:owner => current_user )
  end
end

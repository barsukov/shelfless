module BookParams
  extend ActiveSupport::Concern
  included do
    before_action :set_book, except: [:index, :create]
    # Use callbacks to share common setup or constraints between actions.
    private
     # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:book_id])
    end
  end
end

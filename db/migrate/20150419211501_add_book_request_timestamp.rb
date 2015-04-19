class AddBookRequestTimestamp < ActiveRecord::Migration
  def change
    add_column(:book_requests, :created_at, :datetime)
    add_column(:book_requests, :updated_at, :datetime)
  end
end

class BookRequestExtensionState < ActiveRecord::Migration
  def change
    add_column(:book_requests, :extension_state, :integer, default: 0)
  end
end

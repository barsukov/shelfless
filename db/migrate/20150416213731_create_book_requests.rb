class CreateBookRequests < ActiveRecord::Migration
  def change
    create_table :book_requests do |t|
      t.integer :state, default: 0
      t.integer :reader_id
      t.integer :holder_id
      t.integer :book_id
    end
  end

end

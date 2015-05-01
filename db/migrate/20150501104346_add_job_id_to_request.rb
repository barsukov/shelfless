class AddJobIdToRequest < ActiveRecord::Migration
  def change
    add_column :book_requests, :expired_date, :datetime
    add_column :book_requests, :queue_id, :string
  end
end

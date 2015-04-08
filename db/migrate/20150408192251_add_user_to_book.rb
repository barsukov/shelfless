class AddUserToBook < ActiveRecord::Migration
  def change
    change_column :users, :role, :string, :default => "user"
    add_column :books, :owner_id, :integer, references: :users
  end
end

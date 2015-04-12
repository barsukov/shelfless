class AddAccountToBook < ActiveRecord::Migration
  def change
    add_reference :books, :account, index: true
  end
end

class RemovePostcodeColumnFromBook < ActiveRecord::Migration
  def change
    remove_column :books, :postcode, :integer
    add_column :accounts, :postcode, :integer
  end
end

class AddCityToAccount < ActiveRecord::Migration
  def change
    remove_column :accounts, :postcode
    add_column :accounts, :city, :string
  end
end

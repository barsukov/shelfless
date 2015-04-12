class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.references :user
      t.string :name
      t.string :surname
      t.timestamps null: false
    end
  end
end

class AddAuthor < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
      add_reference :books, :author, index: true
      t.timestamps null: false
    end
  end
end

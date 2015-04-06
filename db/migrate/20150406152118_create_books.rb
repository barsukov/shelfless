class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|

      t.timestamps null: false

      t.string :title

      t.integer :postcode
      t.boolean :share, default: true
      t.boolean :swap, default: false
    end
  end
end

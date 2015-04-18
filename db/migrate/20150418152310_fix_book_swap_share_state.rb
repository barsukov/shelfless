class FixBookSwapShareState < ActiveRecord::Migration
  def change
    remove_column :books, :swap
    remove_column :books, :share
    add_column :books, :state, :integer, default: 0
  end
end

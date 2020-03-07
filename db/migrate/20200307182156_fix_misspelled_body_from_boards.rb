class FixMisspelledBodyFromBoards < ActiveRecord::Migration[5.2]
  def change
    remove_column :boards, :boday, :string
    add_column :boards, :body, :string

  end
end

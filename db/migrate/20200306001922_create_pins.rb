class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title
      t.string :body
      t.integer :board_id

      t.timestamps
    end
    add_index :pins, :board_id
  end
end

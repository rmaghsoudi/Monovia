class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.integer :value
      t.string :name
      t.string :emoji
      t.integer :game_id
      t.integer :user_id
    end
  end
end

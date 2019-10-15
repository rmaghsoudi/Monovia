class CreateRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :rounds do |t|
      t.integer :number
      t.integer :game_id

    end
  end
end

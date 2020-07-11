class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.string :position
      t.string :nationality
      t.string :currentclub
      t.boolean :retired

      t.timestamps
    end
  end
end

class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :country
      t.string :league
      t.string :teams

      t.timestamps
    end
  end
end

class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :current_status, null: false, default: 'created'
      t.datetime :due_on, null: false
      t.datetime :start_on, default: DateTime.now
      t.boolean :archived, default: false
      t.string :color, default: '#f49931'
      t.text :notes
      t.integer :owner_id, null: false
      t.integer :team_id, null: false

      t.timestamps
    end

    add_index :projects, :owner_id
    add_index :projects, :team_id
  end
end

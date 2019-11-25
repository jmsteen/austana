class CreateTaskLists < ActiveRecord::Migration[5.2]
  def change
    create_table :task_lists do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end

    add_index :task_lists, :owner_id
    add_index :task_lists, :project_id
  end
end

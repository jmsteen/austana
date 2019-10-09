class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.boolean :completed, null: false, default: false
      t.datetime :completed_at
      t.date :due_on
      t.datetime :due_at
      t.string :name, null: false
      t.text :notes
      t.date :start_on, default: DateTime.now
      t.integer :assignee_id, null: false
      t.integer :parent_task_id, null: false
      t.integer :project_id, null: false
      t.integer :task_list_id, null: false

      t.timestamps
    end

    add_index :tasks, :assignee_id
    add_index :tasks, :parent_task_id
    add_index :tasks, :project_id
    add_index :tasks, :task_list_id
  end
end

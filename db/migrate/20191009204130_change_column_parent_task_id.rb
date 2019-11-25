class ChangeColumnParentTaskId < ActiveRecord::Migration[5.2]
  def change
    change_column :tasks, :parent_task_id, :integer, null: true
  end
end

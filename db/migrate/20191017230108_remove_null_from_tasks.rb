class RemoveNullFromTasks < ActiveRecord::Migration[5.2]
  def change
    change_column_null :tasks, :task_list_id, true
  end
end

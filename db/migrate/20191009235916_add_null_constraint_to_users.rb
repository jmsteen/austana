class AddNullConstraintToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :team_id, false
    add_index :users, :team_id
  end
end

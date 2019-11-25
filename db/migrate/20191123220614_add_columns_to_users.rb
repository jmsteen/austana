class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :team_id, :integer
    add_column :users, :color, :string
  end

end

class AddMembersToTeams < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :members, :string, array: true, default: []
  end
end

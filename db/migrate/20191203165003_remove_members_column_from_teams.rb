class RemoveMembersColumnFromTeams < ActiveRecord::Migration[5.2]
  def change
    remove_column :teams, :members, :jsonb
  end
end

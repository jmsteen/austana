class Team < ApplicationRecord
    validates :name, presence: true

    has_many :projects
    has_many :members,
        class_name: :User,
        foreign_key: :team_id
end

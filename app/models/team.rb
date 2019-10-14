class Team < ApplicationRecord
    validates :name, presence: true

    has_many :projects
    has_many :members,
        through: :projects,
        foreign_key: :owner
end

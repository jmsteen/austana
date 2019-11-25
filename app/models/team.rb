class Team < ApplicationRecord
    validates :name, presence: true
    # attribute :members, default: []
    has_many :projects
    # has_many :members,
    #     through: :projects,
    #     source: :owner
    has_many :owners,
        through: :projects,
        source: :owner
    has_and_belongs_to_many :users
    
end

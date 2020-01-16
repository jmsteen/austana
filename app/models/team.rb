class Team < ApplicationRecord
    validates :name, presence: true

    has_many :projects

    has_many :owners,
        through: :projects,
        source: :owner
    has_and_belongs_to_many :users
    
end

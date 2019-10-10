class TaskList < ApplicationRecord
    validates :name, presence: true
    validates :name, length: { minimum: 3 }

    belongs_to :project
    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
    has_many :tasks
end

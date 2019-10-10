class Project < ApplicationRecord
    validates :name, :current_status, :due_on, presence: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    belongs_to :team

    has_many :task_lists
    has_many :tasks
    
end

class Task < ApplicationRecord
    validates :name, :completed, presence: true

    belongs_to :assignee,
        class_name: :User,
        foreign_key: :assignee_id

    belongs_to :parent_task,
        class_name: :Task,
        foreign_key: :parent_task_id

    belongs_to :project

    belongs_to :task_list
end

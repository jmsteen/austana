class Api::TasksController < ApplicationController
    before_action :require_signed_in

    def create
        @task = Task.new(task_params)
        @task.project_id ||= @task.assignee.projects.first.id

        if @task.save
            render 'api/tasks/show'
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def show
        @task = Task.find(params[:id])
    end

    def index
        @tasks = current_user.tasks
        render 'api/tasks/index'
    end

    def update
        @task = Task.find(params[:id])

        if @task.update(task_params)
            render 'api/tasks/show'
        else
            render json: @task.errors.full_messages, status: 418
        end
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
        render json: @task
    end

    private

    def task_params
        params.require(:task).permit(:due_on, :due_at, :name, :notes, :completed,
            :assignee_id, :parent_task_id, :task_list_id, :start_on, :project_id)
    end
end

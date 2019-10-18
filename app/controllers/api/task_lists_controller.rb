class Api::TaskListsController < ApplicationController
    before_action :require_signed_in
    def show
        @task_list = params[:id]
        render 'api/task_lists/show'
    end

    def update
        @task_list = TaskList.find(params[:id])

        if @task_list.update(task_list_params)
            render 'api/task_lists/show'
        else
            render json: @task_list.errors.full_messages
        end
    end
    
    def index
        @task_lists = Project.find(params[:project_id]).task_lists
        render 'api/task_lists/index'
    end

    private

    def task_list_params
        params.require(:task_list).permit(:name)
    end
end
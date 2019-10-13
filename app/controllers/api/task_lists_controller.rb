class Api::TaskListsController < ApplicationController
    before_action :require_signed_in

    def index
        @task_lists = current_user.task_lists
        render 'api/tasks/index'
    end
end
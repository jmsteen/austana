class Api::ProjectsController < ApplicationController
    before_action :require_signed_in

    def show
        @project = Project.find(params[:id])
        render 'api/projects/show'
    end

    def create
        @project = Project.new(project_params)
        @project.owner_id = current_user.id

        if @project.save
            create_seed_data
            render 'api/projects/show'
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def index
        @projects = current_user.projects
        render 'api/projects/index'
    end

    def update
        @project = Project.find(params[:id])

        if @project.update(project_params)
            render 'api/projects/show'
        else
            render json: @project.errors.full_messages, status: 401
        end
    end

    def destroy
        @project.find(project_params)
        @project.destroy
        render json: ["Project successfully destroyed"]
    end

    private

    def project_params
        params.require(:project).permit(:name, :current_status, :due_on, :team_id,
            :color, :notes)
    end

    def create_seed_data
        task_list1 = TaskList.create(
                    name: 'Discovery and Planning',
                    owner_id: current_user.id,
                    project_id: @project.id
                    )
        TaskList.create([
                {
                    name: 'Development',
                    owner_id: current_user.id,
                    project_id: @project.id,
                },
                {
                    name: 'Testing',
                    owner_id: current_user.id,
                    project_id: @project.id,
                },
                {
                    name: 'Deployment',
                    owner_id: current_user.id,
                    project_id: @project.id,
                }
            ])
        Task.create(
            due_on: Date.today + 3,
            name: 'Create design docs',
            assignee_id: current_user.id,
            project_id: @project.id,
            task_list_id: task_list1.id
        )
    end

end

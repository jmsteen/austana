class Api::TeamsController < ApplicationController
    before_action :require_signed_in;

    def index
        @teams = current_user.teams
        render 'api/teams/index'
    end

    def create
        @team = Team.new(team_params)
        
        if @team.members.length < 1
            @team.members.push(current_user.name + '-' + current_user.email)
        end
       
        if @team.save
            current_user.teams << @team
            create_seed_data
            render 'api/teams/show'
        else
            render json: @team.errors.full_messages, status: 422
        end
    end

    def update
        @team = Team.find(params[:id])
        
        if @team.update(team_params)
            render 'api/teams/show'
        else
            render json: ["Could not update team with value entered."]
        end
    end

    def show
        @team = Team.find(params[:id])
        render 'api/teams/show'
    end

    private
    
    def team_params
        params.require(:team).permit(:name, :description, members: [])
    end

    def create_seed_data
        debugger
        project = Project.create(name: @team.name + " Project", due_on: '2019-12-31 19:38:15',
                owner_id: current_user.id, team_id: @team.id)
        task_list1 = TaskList.create(
                name: 'Discovery and Planning',
                owner_id: current_user.id,
                project_id: project.id
                )
        TaskList.create([
                {
                    name: 'Development',
                    owner_id: current_user.id,
                    project_id: project.id,
                },
                {
                    name: 'Testing',
                    owner_id: current_user.id,
                    project_id: project.id,
                },
                {
                    name: 'Deployment',
                    owner_id: current_user.id,
                    project_id: project.id,
                }
            ])
        Task.create(
            due_on: Date.today + 3,
            name: 'Take a look around',
            assignee_id: current_user.id,
            project_id: project.id,
            task_list_id: task_list1.id
        )
        
    end
end
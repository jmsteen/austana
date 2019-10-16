class Api::TeamsController < ApplicationController
    before_action :require_signed_in;

    def index
        @teams = current_user.teams
        render 'api/teams/index'
    end

    def create
        @team = Team.new(team_params)

        if @team.save
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
        params.require(:team).permit(:name, :description)
    end
end
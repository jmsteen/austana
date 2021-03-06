class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        team = Team.find(params[:team_id])
        
        @users = team.users
        render 'api/users/index'
    end

    def update
        @user = User.find(current_user.id)
  
        if @user.update(user_params)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :color, :photo)
    end
end

require 'pry-remote'

class UsersController < ApplicationController
  before_action :authenticate_user, only: [:index, :show]

  def create
    user = User.new(user_params)
    if user.save
      render json: {status: 200, user: user}
    else
      # binding.remote_pry
      render json: {status: 400, errors: user.errors.messages}
    end
  end

  def index

  end

  def show
    user = current_user
    binding.remote_pry
    if user
      render json: {status: 200, user: user}
    else
      render json: {status: 400, msg: "user not found"}
    end
  end


private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end

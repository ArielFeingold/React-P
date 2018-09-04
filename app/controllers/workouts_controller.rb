require 'pry-remote'

class WorkoutsController < ApplicationController
  before_action :authenticate_user, only: [:index, :show]

  def index
      workouts = current_user.workouts
        render json: {status:200, workouts: workouts}
  end

end

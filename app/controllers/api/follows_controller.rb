class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.all
    render "api/follows/index"
  end
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    
    @follow = Follow.find_by(follower_id: current_user.id, followee_id: params[:id] )
    @follow.destroy
    render "api/follows/show"
  end
  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end

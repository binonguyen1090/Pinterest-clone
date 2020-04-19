class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
    render "api/pins/index"
  end

  def create
    debugger
    @like = Like.new
    @like.user_id = current_user.id
    @like.pin_id = params[:id]
    if @like.save
      # render "api/pins/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    # debugger
    @like = Like.find_by(user_id: current_user.id, pin_id: params[:id])
    @like.destroy
    # render "api/pins/show"
  end

  def like_params
    params.require(:like).permit(:pin_id)
  end
end

class Api::PinsController < ApplicationController
  def index
    if params[:user_id]
      boardIds = Board.where(user_id: params[:user_id])
      @pins = Pin.where(board_id: boardIds)
    elsif (params[:board_id])
      @pins = Pin.where(board_id: params[:board_id])
    else
      @pins = Pin.all
    end
  end

  def show
    @pin = Pin.find(params[:id])
    render "/api/pins/show"
  end

  def create
    @pin = Pin.new(pin_params)
    if @pin.save
      render "/api/pins/show"
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update(pin_params)
      render "/api/pins/show"
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end


  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy

    render "/api/pins/show"
  end

  private

  def pin_params
    params.require(:pin).permit(:title, :body, :board_id, :photo)
  end
  def movepintoboard_params
    params.require(:pin).permit(:title, :body, :board_id)
  end
end

# if params[:board_id]
#   @pins = Board.find(params[:board_id]).pins
# elsif params[:boardIds]
#   @pins= Pin.where(board_id: params[:boardIds])
# elsif params[:user_id]
#   @pins = Pin.joins(:board).where("boards.user_id = #{params[:user_id]}")
# elsif params[:userIds]
#   boardIds = Board.where(user_id: params[:userIds]).ids
#   @pins = Pin.where(board_id: boardIds)
# else

class Api::SearchsController < ApplicationController
  def index
    
    @results = {}
    @results[:pins] = Pin.whose_title_starts_with(params[:query])
    # @results[:users] = User.whose_username_starts_with(params[:query])

    render "api/searchs/index"
  end
end

class RoundsController < ApplicationController

  def index
    render json: Round.all, each_serializer: RoundSerializer
  end

end
class GamesController < ApplicationController
  # before_action :set_game, only: %i[show update destroy]

  def index
    render json: Game.all, each_serializer: GameSerializer
  end

  # def show
  #   render json: @property, each_serializer: GameSerializer
  # end

  def create
    game = Game.new(game_params)
    if game.save
      render json: game, status: :created, each_serializer: GameSerializer
    else
      render json: game.errors, status: :unprocessable_entity
    end
  end

  # def update
  #   if @game.update(game_params)
  #     render json: @game, each_serializer: GameSerializer
  #   else
  #     render json: @game.errors, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   @property.destroy
  # end

  private
  # def set_game
  #   @game = Game.find(params[:id])
  # end

  def game_params
    params.require(:game).permit(:subject)
  end

end
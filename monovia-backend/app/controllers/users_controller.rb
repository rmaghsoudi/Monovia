class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  def index
    render json: User.all, each_serializer: UserSerializer
  end

  def show
    render json: @user, each_serializer: UserSerializer
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created, each_serializer: UserSerializer
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user, each_serializer: UserSerializer
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :wallet, properties: [])
  end

end

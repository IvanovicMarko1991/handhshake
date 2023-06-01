class Api::V1::VisitatorsController < ApplicationController


  def index
    @visitators = Visitator.all.order('check_in DESC')

    render json: @visitators
  end

  def show
    render json: @visitator
  end

  def new
    @visitator = Visitator.new
  end


  def create
    @visitator = Visitator.new(visitator_params)
    
    if @visitator.save
      render json: @visitator
    else
      render json: { errors: @visitator.errors.messages }, status: :unprocessable_entity
    end
  end

  def update
    if @visitator.update(visitator_params)
      render json: @visitator
    else
      render json: { errors: @visitator.errors.messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @visitator.destroy
  end

  private

  def set_visitator
    @visitator = Visitator.find_by(id: params[:id])
  end

  def visitator_params
    params.permit(:first_name, :last_name, :email, :major, :check_in)
  end


end

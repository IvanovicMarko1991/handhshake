class Api::V1::StudentsController < ApplicationController

  def index
    @students = Student.all

    render json: @students
  end

  def show
    render json: @student
  end

  def new
    @student = Student.new
  end
  
  def create
    @student = Student.new(student_params)

    if @student.save
      render json: @student
    else
      render json: { errors: @student.errors.messages }, status: :unprocessable_entity
    end
  end

  def update
    if @student.update(student_params)
      render json: @student
    else
      render json: { errors: @student.errors.messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @student.destroy
  end

  private

  def set_student
    @student = Student.find_by(id: params[:id])
  end

  def student_params
    params.permit(:first_name, :last_name, :check_in_time)
  end
end

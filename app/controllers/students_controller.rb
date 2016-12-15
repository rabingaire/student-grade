class StudentsController < ApplicationController
	def index
			@students = Student.all
	end

	def create
		@student = Student.create(student_param)
	end

	def update
		@student = Student.find(params[:id])
		redirect_to edit_idea_path(params[:id])

	end

	def delete
		@student = Student.find(params[:id])
		@student.destroy
	end

	private
		def student_param
			params.require(:student).permit(:name, :roll_no, :student_class, :sub_class, :schoolname)
		end
end

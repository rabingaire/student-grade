class SubjectsController < ApplicationController

	def create
		@subject = Subject.create(student_param)
	end

	def update
		@subject = Subject.find(params[:id])
		redirect_to edit_idea_path(params[:id])

	end

	def delete
		@subject = Subject.find(params[:id])
		@subject.destroy
	end

	private
		def student_param
			params.require(:subject).permit(:student_id, :sub_name, :marks_obt, :letter_grade, :grade_point)
		end

end

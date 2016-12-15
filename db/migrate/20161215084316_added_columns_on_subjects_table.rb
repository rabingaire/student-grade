class AddedColumnsOnSubjectsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :subjects, :student_id, :integer
    add_column :subjects, :grade_point, :float
    rename_column :subjects, :grade, :letter_grade
  end
end

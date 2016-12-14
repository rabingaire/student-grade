class CreateSubjects < ActiveRecord::Migration[5.0]
  def change
    create_table :subjects do |t|
		t.string :sub_name
		t.integer :marks_obt
		t.string :grade
      t.timestamps
    end
  end
end

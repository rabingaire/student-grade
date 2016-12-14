class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
    	t.string :schoolname
    	t.string :name
    	t.integer :roll_no
    	t.integer :class
    	t.string :sub_class
      t.string :something
      t.timestamps
    end
  end
end

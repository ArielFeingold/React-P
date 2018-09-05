class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :description
      t.string :muscle
      t.string :equipment
      t.integer :session_id
      t.integer :user_id

      t.timestamps
    end
  end
end

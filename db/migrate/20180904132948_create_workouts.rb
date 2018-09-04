class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :title
      t.string :description
      user_id :integer


      t.timestamps
    end
  end
end

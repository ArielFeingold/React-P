class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :title
      t.string :description
<<<<<<< HEAD
      user_id :integer
=======
<<<<<<< HEAD
      t.belongs_to :user, index: true
>>>>>>> fc44e0e683cff1e369f5fd13ea961736a4cd2485

=======
      user_id :integer
      
>>>>>>> db8bfe6bf3a773d05b37b861ad6a4342d17c0617

      t.timestamps
    end
  end
end

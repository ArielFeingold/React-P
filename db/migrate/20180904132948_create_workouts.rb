class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :title
      t.string :description
<<<<<<< HEAD
      t.belongs_to :user, index: true

=======
      user_id :integer
      
>>>>>>> db8bfe6bf3a773d05b37b861ad6a4342d17c0617

      t.timestamps
    end
  end
end

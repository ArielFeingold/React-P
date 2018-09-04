class Workout < ApplicationRecord
  belongs_to :user

<<<<<<< HEAD
  validates :title, :description, presence: true
=======
<<<<<<< HEAD
  validates :title, :description, presence: true
=======
  validates :title, uniqueness: true
>>>>>>> db8bfe6bf3a773d05b37b861ad6a4342d17c0617
>>>>>>> fc44e0e683cff1e369f5fd13ea961736a4cd2485
end

class Workout < ApplicationRecord
  belongs_to :user
  has_many :sessions
  has_many :exercises, through: :sessions

  validates :title, :description, presence: true
end

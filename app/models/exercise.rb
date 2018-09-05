class Exercise < ApplicationRecord
  belongs_to :session
  belongs_to :user
  has_many :wsets
end

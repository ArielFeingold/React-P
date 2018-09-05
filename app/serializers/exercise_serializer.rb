class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :muscle, :equipment
end

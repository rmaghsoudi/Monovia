class GameSerializer < ActiveModel::Serializer
  has_many :rounds
  has_many :properties
  
  attributes :id, :subject
end

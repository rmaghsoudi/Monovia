class UserSerializer < ActiveModel::Serializer
  has_many :properties
  has_many :games, through: :properties
  
  attributes :id, :name, :wallet
end

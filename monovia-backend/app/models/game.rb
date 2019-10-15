class Game < ApplicationRecord
  has_many :properties
  has_many :rounds
  has_many :users, through: :properties

  def users()
    super.uniq
  end

end

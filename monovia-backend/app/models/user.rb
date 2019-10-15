class User < ApplicationRecord
  has_many :properties
  has_many :games, through: :properties

  def games()
    super.uniq
  end

end

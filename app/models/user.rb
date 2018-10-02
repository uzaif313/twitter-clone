class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :tweets

  def display_name
  	"#{firstname} #{lastname}"
  end       

   def gravatar
  	hash = Digest::MD5.hexdigest(email)
  	"http://gravatar.com/avatar/#{hash}"
  end
end

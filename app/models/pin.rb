# == Schema Information
#
# Table name: pins
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :string
#  board_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Pin < ApplicationRecord
  validates :title, :body, :board_id, presence: true

  has_one_attached :photo


  has_many :likes,
         primary_key: :id,
         foreign_key: :pin_id,
         class_name: :Like

has_many :likers,
  through: :likes,
  source: :user
 
  belongs_to :board
  # belongs_to :users,
  #     through: :board,
  #     source: :user
end

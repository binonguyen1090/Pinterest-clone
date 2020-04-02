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

  belongs_to :board

  # belongs_to :users,
  #     through: :board,
  #     source: :user
end

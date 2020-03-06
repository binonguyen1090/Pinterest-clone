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
    validates :title , presence: true;

    has_one_attached :photo

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board


    has_many :users,
        through: :board,
        source: :user 
end

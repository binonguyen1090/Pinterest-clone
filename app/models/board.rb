# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string
#  boday      :string
#  visibility :boolean
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Board < ApplicationRecord
    validates :title, :user_id, presence: true;

    # include Following

    has_many :pins,
        foreign_key: :board_id,
        class_name: :Pin

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end

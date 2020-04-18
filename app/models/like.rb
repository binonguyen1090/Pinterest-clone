class Like < ApplicationRecord
    belongs_to :user,
           primary_key: :id,
           foreign_key: :user_id,
           class_name: :User

    belongs_to :pin,
           primary_key: :id,
           foreign_key: :pin_id,
           class_name: :Pin
end

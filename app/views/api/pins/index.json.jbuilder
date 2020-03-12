# @pins.each do |pin|
#   json.pins do
#     json.set! pin.id do
#       json.extract! pin, :id, :title, :body, :board_id, :created_at
#       if pin.photo.attached?
#         json.photo url_for(pin.photo)
#       end
#     end
#   end
# end

# json.array! @pins do |pin|
#     json.extract! pin, :id, :title
#     json.photoUrl url_for(pin.photo)
# end
# json.pins do
    @pins.each do |pin|
        json.set! pin.id do
            json.extract! pin, :id, :title, :body,:board_id
            # json.photoUrl url_for(pin.photo)
            if pin.photo.attached?
                json.photoUrl url_for(pin.photo)
            else
                json.photoUrl ""
            end
        end
    end
# end
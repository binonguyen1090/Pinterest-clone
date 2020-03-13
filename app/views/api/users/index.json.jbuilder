# json.boards do
#     @boards.each do |board|
#         json.set! board.id do
#             json.extract! board, :id, :title, :body, :user_id
#         end
#     end
# end


# @pins.each do |pin|
#     json.set! pin.id do
#         json.extract! pin, :id, :title, :body,:board_id
        
        
#     end
# end


@users.each do |user|
    json.set! user.id do 
        json.extract! user, :email, :fname, :lname, :description, :location
    end
end
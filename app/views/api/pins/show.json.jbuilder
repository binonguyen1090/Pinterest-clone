json.extract! @pin, :id, :title, :body, :board_id

# json.likes do
#   @pin.likes.each do |like|
#     json.set! like.id do
#       json.partial! "api/likes/like", like: like
#     end
#   end
# end
json.likes @pin.likes.count

if (@pin.likes && current_user.id)
  json.liked_by_current_user !!@pin.likes.find_by(user_id: current_user.id)
end

if @pin.photo.attached?
  json.photoUrl url_for(@pin.photo)
else
  json.photoUrl ""
end

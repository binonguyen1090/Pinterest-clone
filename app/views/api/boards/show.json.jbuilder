json.extract! @board, :id, :title, :body, :user_id
json.user @board.user
arr = []
@board.pins.each do |pin|
  arr << url_for(pin.photo)
end
# debugger
json.pinPhotos do
  json.array! arr
end

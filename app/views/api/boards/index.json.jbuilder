json.boards do
  @boards.each do |board|
    json.set! board.id do
      json.extract! board, :id, :title, :body, :user_id
      arr = []
      board.pins.each do |pin|
        arr << url_for(pin.photo)
      end
      # debugger
      json.pinPhotos do
        json.array! arr
      end
    end
  end
end

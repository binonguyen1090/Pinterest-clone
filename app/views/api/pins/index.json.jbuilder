@pins.each do |pin|
  json.set! pin.id do
    json.extract! pin, :id, :title, :body, :board_id
    # json.likes pin.likes.count
    # json.liked_by_current_user !!pin.likes.find_by(user_id: current_user.id)
    if pin.photo.attached?
      json.photoUrl url_for(pin.photo)
    else
      json.photoUrl ""
    end
  end
end

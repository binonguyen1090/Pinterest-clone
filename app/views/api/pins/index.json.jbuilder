@pins.each do |pin|
  json.set! pin.id do
    json.extract! pin, :id, :title, :body, :board_id
    if pin.photo.attached?
      json.photoUrl url_for(pin.photo)
    else
      json.photoUrl ""
    end
  end
end

json.array! @results[:pins].each do |pin|
    json.title pin.title
    json.photoUrl url_for(pin.photo)
    json.id pin.id
    json.body pin.body
end

# json.array! @results[:users].each do |user|
#     json.username user.username
#     json.id user.id
#     json.image_url user.image_url
# end
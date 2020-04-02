@users.each do |user|
  json.set! user.id do
    json.extract! user, :email, :fname, :lname, :description, :location
  end
end

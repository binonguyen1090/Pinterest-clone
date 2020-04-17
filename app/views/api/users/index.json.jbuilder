@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :email, :fname, :lname, :description, :location, :followee_ids, :follower_ids
  end
end

json.extract! user, :id, :email, :fname, :lname, :description, :location, :followee_ids, :follower_ids

json.pins user.pins

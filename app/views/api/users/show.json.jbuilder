json.partial! "api/users/user", user: @user


json.followers do
  @user.followers.each do |follower|
    json.set! follower.id do
      json.partial! "api/users/user", user: follower
    end
  end
end

json.followees do
  @user.followees.each do |followee|
    json.set! followee.id do
      json.partial! "api/users/user", user: followee
    end
  end
end

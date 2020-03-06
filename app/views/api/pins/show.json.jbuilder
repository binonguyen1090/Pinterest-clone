json.extract! @pin, :id, :title, :body, :board_id
json.photoUrl url_for(@pin.photo)
# <h1><%= @pin.title %></h1>
# <img src="<%=  url_for(@pin.photo) %>" >
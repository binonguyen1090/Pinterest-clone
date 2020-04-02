
json.boards do
    @boards.each do |board|
        json.set! board.id do
            json.extract! board, :id, :title, :body, :user_id
        end
    end
end

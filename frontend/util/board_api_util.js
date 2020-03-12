
// 1. `fetchBoards`
// 2. `fetchBoard(boardId)`
// 3. `createBoard(board)`
// 4. `updateBoard(board)`
// 5. `deleteBoard(boardId)`
    

export const fetchBoards = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}/boards`,
    })
)

export const fetchBoard = boardId => {
    return $.ajax({
        method: 'GET',
        url: `api/boards/${boardId}`
    })
};

export const createBoard = board => {
    
    return $.ajax({
        url: 'api/boards',
        method: 'POST',
        data: { board }
    })
};

export const updateBoard = board => {
    return $.ajax({
        url: `api/boards/${board.id}`,
        method: 'PATCH',
        data: { board }
    })
};

export const deleteBoard = (boardId) => {
    
    return $.ajax({
        url: `api/boards/${boardId}`,
        method: 'DELETE'
    })
};


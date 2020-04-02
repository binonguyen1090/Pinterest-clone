import * as BoardApiUtil from "../util/board_api_util";

export const RECEIVE_ALL_BOARDS = "RECEIVE_ALL_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";

const receiveAllBoards = payload => ({
    type: RECEIVE_ALL_BOARDS,
    payload
});

export const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
});

const removeBoard = payload => ({
    type: REMOVE_BOARD,
    boardId: payload.id,
    userId: payload.user_id
});

export const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
});

export const fetchBoards = userId => dispatch =>
    BoardApiUtil.fetchBoards(userId).then(boards =>
        dispatch(receiveAllBoards(boards))
    );

export const fetchBoard = boardID => dispatch =>
    BoardApiUtil.fetchBoard(boardID).then(board => dispatch(receiveBoard(board)));

export const createBoard = board => dispatch =>
    BoardApiUtil.createBoard(board).then(
        board => dispatch(receiveBoard(board)),
        errors => dispatch(receiveBoardErrors(errors.responseJSON))
    );

export const updateBoard = board => dispatch =>
    BoardApiUtil.updateBoard(board).then(
        board => dispatch(receiveBoard(board)),
        errors => dispatch(receiveBoardErrors(errors.responseJSON))
    );

export const deleteBoard = boardId => dispatch =>
    BoardApiUtil.deleteBoard(boardId).then(boardId =>
        dispatch(removeBoard(boardId))
    );

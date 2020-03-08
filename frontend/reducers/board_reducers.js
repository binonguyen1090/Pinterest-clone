import {
    RECEIVE_ALL_BOARDS,
    RECEIVE_BOARD,
    REMOVE_BOARD,
} from '../actions/board_action';
import merge from 'lodash/merge';

/*
Export an `EventsReducer` that takes in the old state and appropriately handles
all event actions.
*/

const BoardsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_BOARDS:
            return merge({}, action.payload.boards);
        case RECEIVE_BOARD:
            nextState[action.board.id] = action.board
            return nextState
        case REMOVE_BOARD:
            delete nextState[action.boardId]
            return nextState
        default:
            return state;
    }
}
export default BoardsReducer
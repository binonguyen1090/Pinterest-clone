import {

    RECEIVE_BOARD

} from "../actions/board_action";
import merge from "lodash/merge";

/*
Export an `EventsReducer` that takes in the old state and appropriately handles
all event actions.
*/

const BoardCreatorReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BOARD:
          
            return merge({}, { board: action.board });

        default:
            return state;
    }
};
export default BoardCreatorReducer;

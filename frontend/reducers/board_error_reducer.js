
import { RECEIVE_BOARD_ERRORS} from "../actions/board_action";


const boardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
        // case RECEIVE_CURRENT_USER:
        //     return [];
        default:
            return state;
    }
}
export default boardErrorsReducer




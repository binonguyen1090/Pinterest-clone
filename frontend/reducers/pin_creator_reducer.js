import {

    RECEIVE_SINGLE_USER

} from "../actions/user_action";
import merge from "lodash/merge";

/*
Export an `EventsReducer` that takes in the old state and appropriately handles
all event actions.
*/

const PinCreatorReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SINGLE_USER:

            return merge({}, { user: action.user });

        default:
            return state;
    }
};
export default PinCreatorReducer;


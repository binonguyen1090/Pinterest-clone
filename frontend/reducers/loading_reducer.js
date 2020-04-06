import {
    START_LOADING,
    STOP_LOADING
} from "../actions/loading_action";
import merge from "lodash/merge";

/*
Export an `EventsReducer` that takes in the old state and appropriately handles
all event actions.
*/

const LoadingReducer = (oldState = false, action) => {
    switch (action.type) {
        case START_LOADING:
            return true;
        case STOP_LOADING:
            return false;
        default:
            return oldState;
    }
};
export default LoadingReducer;

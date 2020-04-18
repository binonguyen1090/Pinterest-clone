import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE} from '../actions/like_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_action'
import { RECEIVE_PIN } from '../actions/pin_action'

import { merge } from 'lodash';

const LikesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LIKE:
            debugger
            nextState[action.like.id] = action.like
            return nextState
        case REMOVE_LIKE:
            delete nextState[action.likeId];
            return nextState;
        case RECEIVE_PIN:
            return Object.assign(nextState, action.pin.likes)
        default:
            return nextState;
    };
};

export default LikesReducer;
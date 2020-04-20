import {
  RECEIVE_ALL_PINS,
  RECEIVE_PIN,
  REMOVE_PIN,
  
} from "../actions/pin_action";
import {
  RECEIVE_LIKE
} from "../actions/like_action";
import { RECEIVE_CURRENT_USER } from "../actions/session_action";

import merge from "lodash/merge";

const PinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let newState2 = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return action.pins;
    case RECEIVE_PIN:
      
      nextState[action.pin.id] = action.pin;
      return nextState;
    case REMOVE_PIN:
      delete nextState[action.pinId];
      return nextState;
    // case RECEIVE_CURRENT_USER:
    //   debugger
    //   return Object.assign({}, state, { [action.user.id]: action.user }, action.likes);
    // case RECEIVE_LIKE:
    //   debugger
    //   newState2[action.like.pin_id].likes.push(action.like.user_id)
    //   // newState2[action.like.user_id].likes.push(action.like.pin_id)
    //   return newState2;
    default:
      return state;
  }
};
export default PinsReducer;

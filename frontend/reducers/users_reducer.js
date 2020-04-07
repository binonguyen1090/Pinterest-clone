import { RECEIVE_CURRENT_USER } from "../actions/session_action";
import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER} from '../actions/user_action'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      
      return  action.users
    case RECEIVE_SINGLE_USER:

      nextState[action.user.id] = action.user;
      return nextState;
    
    

    default:
      return state;
  }
};
export default usersReducer;

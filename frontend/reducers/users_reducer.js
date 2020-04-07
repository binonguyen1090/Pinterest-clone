import { RECEIVE_CURRENT_USER } from "../actions/session_action";
import { RECEIVE_ALL_USERS} from '../actions/user_action'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      debugger
      return  action.users
    
    

    default:
      return state;
  }
};
export default usersReducer;

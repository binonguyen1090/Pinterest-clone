import { RECEIVE_CURRENT_USER } from "../actions/session_action";
import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER} from '../actions/user_action'
import { RECEIVE_FOLLOW } from '../actions/follow_action'


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      
      return  action.users
    case RECEIVE_SINGLE_USER:

      nextState[action.user.id] = action.user;
      return nextState;
    
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign({}, state, { [action.user.id]: action.user }, action.followers, action.followees);
    case RECEIVE_FOLLOW:
      debugger
      let newState2 = Object.assign({}, state);
      let array = [];
      let array2 = [];

      
      // array.push(action.follow.followee_id)
      // newState2[action.follow.follower_id].followee_ids = array
      newState2[action.follow.follower_id].followee_ids.push(action.follow.followee_id)
     
      // array2.push(action.follow.follower_id)
      // newState2[action.follow.followee_id].follower_ids = array2
      newState2[action.follow.followee_id].follower_ids.push(action.follow.follower_id)
      return newState2;
    

    default:
      return state;
  }
};
export default usersReducer;

import { RECEIVE_CURRENT_USER } from "../actions/session_action";
import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER} from '../actions/user_action'
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_action'


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let newState2 = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      
      return  action.users
    case RECEIVE_SINGLE_USER:

      nextState[action.user.id] = action.user;
      return nextState;
    
    case RECEIVE_CURRENT_USER:
      
      return Object.assign({}, state, { [action.user.id]: action.user }, action.followers, action.followees);
    case RECEIVE_FOLLOW:
      

      newState2[action.follow.follower_id].followee_ids.push(action.follow.followee_id)
   
      newState2[action.follow.followee_id].follower_ids.push(action.follow.follower_id)
      return newState2;
    // case REMOVE_FOLLOW:
      // debugger
      // delete newState[action.follow];
      // newState2[action.follow.follower_id].followee_ids.delete(action.follow.followee_id)

      // newState2[action.follow.followee_id].follower_ids.delete(action.follow.follower_id)
      // return newState2;

    default:
      return state;
  }
};
export default usersReducer;

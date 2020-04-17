import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import BoardsReducer from "./board_reducers";
import PinsReducer from "./pin_reducers";
import FollowsReducer from './follow_reducer'


const entitiesReducer = combineReducers({
  users: usersReducer,
  boards: BoardsReducer,
  pins: PinsReducer,
  follows: FollowsReducer
});

export default entitiesReducer;

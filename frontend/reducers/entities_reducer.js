import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import BoardsReducer from "./board_reducers";

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: BoardsReducer

});

export default entitiesReducer;
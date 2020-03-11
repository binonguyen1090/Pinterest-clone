import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import BoardsReducer from "./board_reducers";
import PinsReducer from "./pin_reducers";

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: BoardsReducer,
    pins: PinsReducer,

});

export default entitiesReducer;
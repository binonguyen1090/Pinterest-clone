import { combineReducers } from "redux";
import  sessionErrorsReducer  from './session_errors_reducer'
import  boardErrorsReducer  from './board_error_reducer'

export const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    board: boardErrorsReducer

})

// export default errorsReducer
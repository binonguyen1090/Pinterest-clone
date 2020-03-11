import { combineReducers } from "redux";
import  sessionErrorsReducer  from './session_errors_reducer'
import  boardErrorsReducer  from './board_error_reducer'
import pinErrorsReducer  from './pin_error_reducer'

export const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    board: boardErrorsReducer,
    pin: pinErrorsReducer,

})

// export default errorsReducer
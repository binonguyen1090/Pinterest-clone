import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import { errorsReducer } from "./errors_reducer";
import ui_reducer from "./ui_reducer";
import searchReducer from './search_reducer';

// import ModalReducer from "./modal_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: ui_reducer,
  search: searchReducer


});
export default rootReducer;

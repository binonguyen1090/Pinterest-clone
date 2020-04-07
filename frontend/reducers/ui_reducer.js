import { combineReducers } from "redux";

import modal from "./modal_reducer";
import loading from "./loading_reducer"
import creator from "./pin_creator_reducer";
import boardCreator from "./board_creator_reducer";


export default combineReducers({
  modal,
  loading,
  creator,
  boardCreator,
  userpage: creator
});

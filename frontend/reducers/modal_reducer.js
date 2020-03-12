import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_action";
import {
  RECEIVE_CURRENT_USER,
} from "../actions/session_action";
import merge from 'lodash/merge';

export default function modalReducer(state = null, action) {
  
  switch (action.type) {
    case OPEN_MODAL:
      // return action.modal
      // return merge ( {},{modal: action.modal}, {boardId: action.boardId})
      return merge ( {},{modal: action.modal}, {options: action.options})
    case CLOSE_MODAL:
      return null;
    case RECEIVE_CURRENT_USER:
      return null
    default:
      return state;
  }
}

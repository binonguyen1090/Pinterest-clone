import { RECEIVE_BOARD_ERRORS } from "../actions/board_action";

const boardErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const _nullErrors = [];
  switch (action.type) {
    case RECEIVE_BOARD_ERRORS:
      return action.errors;
      return [];
    default:
      return _nullErrors;
  }
};
export default boardErrorsReducer;

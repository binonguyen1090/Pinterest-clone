import { RECEIVE_PIN_ERRORS } from "../actions/pin_action";

const pinErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  const _nullErrors = [];
  switch (action.type) {
    case RECEIVE_PIN_ERRORS:
      return action.errors;
    // case RECEIVE_CURRENT_USER:
    //     return [];
    default:
      return _nullErrors;
  }
};
export default pinErrorsReducer;

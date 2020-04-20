import { connect } from "react-redux";
import EditPinForm from "./edit_pin";
import { fetchPin, updatePin } from "../../actions/pin_action";
import {closeModal } from "../../actions/modal_action";
const mSTP = (state) => {
  debugger
  return {
    pin: state.entities.pins[state.ui.modal.options.pinId],
    currentUser: state.entities.users[state.session.id],
  };
};
const mDTP = (dispatch) => {
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    closeModal: () => dispatch(closeModal()),
    updatePin: (pin) => dispatch(updatePin(pin)),
  };
};

export default connect(mSTP, mDTP)(EditPinForm);

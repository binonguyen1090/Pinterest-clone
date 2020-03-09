import React from "react";
import { closeModal } from "../../actions/modal_action";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import CreateBoardFormContainer from "../board/create_board_form_container"
import EditBoardFormContainer from "../board/edit_board_form_container"

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  
  switch (modal.modal) {
    case "Log in":
      component = <LoginFormContainer />;
      break;
    case "Sign up":
      component = <SignupFormContainer />;
      break;
    case "Create Board":
      component = <CreateBoardFormContainer />;
      break;
    case "Edit Board":
      component = <EditBoardFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);

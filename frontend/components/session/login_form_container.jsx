import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, receiveErrors } from "../../actions/session_action";
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_action";


const mSTP = state => ({
  errors: state.errors.session,
  // errors: [],
  formType: "Log in",
  // ui: "moal"
  // navLink: <Link to="/signup">Sign up</Link>
});

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearError: () => dispatch(receiveErrors([])),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
  )
});

export default connect(mSTP, mDTP)(SessionForm);

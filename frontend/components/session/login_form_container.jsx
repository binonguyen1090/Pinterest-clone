import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, receiveErrors } from "../../actions/session_action";
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_action";

const mSTP = state => ({
  errors: state.errors.session,
  formType: "Log in"
});

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  processForm: user => dispatch(login(user)),
  clearError: () => dispatch(receiveErrors([])),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);

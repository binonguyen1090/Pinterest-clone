import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, receiveErrors } from "../../actions/session_action";
import { Link } from "react-router-dom";
import React from "react";
// import {openModal} from '../../actions/modal_action.js'
import { openModal, closeModal } from "../../actions/modal_action";

const mSTP = state => ({
  errors: state.errors.session,
  formType: "Sign up"
});

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearError: () => dispatch(receiveErrors([])),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);

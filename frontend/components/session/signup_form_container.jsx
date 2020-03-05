import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, receiveErrors } from "../../actions/session_action";
import { Link } from "react-router-dom";
import React from "react";


const mSTP = state => ({
  errors: state.errors.session,
  // errors:[],
  formType: "Sign up",
  navLink: <Link to="/login">Log in</Link>
});

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearError: () => dispatch(receiveErrors([]))
});

export default connect(mSTP, mDTP)(SessionForm);

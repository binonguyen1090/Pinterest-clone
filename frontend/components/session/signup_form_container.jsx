import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_action";
import { Link } from "react-router-dom";
import React from "react";


const mSTP = state => ({
  errors: state.errors.session,
  formType: "Sign up",
  navLink: <Link to="/login">Log in</Link>
});

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  // receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mSTP, mDTP)(SessionForm);

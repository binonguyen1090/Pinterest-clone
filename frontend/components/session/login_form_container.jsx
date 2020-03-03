import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_action";
import { Link } from "react-router-dom";
import React from "react";


const mSTP = state => ({
  errors: state.errors.session,
  formType: "Log in",
  navLink: <Link to="/signup">Sign up</Link>
});

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  // receiveErrors: errors => dispatch(receiveErrors(errors))

});

export default connect(mSTP, mDTP)(SessionForm);

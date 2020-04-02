import React from "react";
import { connect } from "react-redux";
// import { Greeting } from "./greeting";
import { logout } from "../../actions/session_action";
import HomePage from "./homepage";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(HomePage);

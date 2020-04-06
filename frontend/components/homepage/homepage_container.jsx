import React from "react";
import { connect } from "react-redux";
// import { Greeting } from "./greeting";
import { logout } from "../../actions/session_action";
import { startLoading, stopLoading } from "../../actions/loading_action";
import HomePage from "./homepage";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  loading: state.ui.loading,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
});

export default connect(mSTP, mDTP)(HomePage);

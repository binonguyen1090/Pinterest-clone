import React from "react";
import { connect } from "react-redux";
import { SplashHeader } from "./splash_header";
import { logout } from "../../actions/session_action";
import { openModal } from "../../actions/modal_action";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(SplashHeader);

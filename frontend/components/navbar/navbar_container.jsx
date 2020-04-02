import React from "react";
import { connect } from "react-redux";
import { Navbar } from "./navbar_component";
import { logout } from "../../actions/session_action";
import { openModal } from "../../actions/modal_action";
// import { withRouter } from 'react-router-dom'

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  currentUserId: state.session.id
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
  //   openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Navbar);
// export default connect(mSTP, mDTP)(Navbar);

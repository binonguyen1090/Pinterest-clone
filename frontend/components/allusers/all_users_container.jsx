import React from "react";
import { connect } from "react-redux";
import  AllUsers  from "./all_users";
import { logout } from "../../actions/session_action";
import { getAllUsers } from "../../actions/user_action";

import { openModal } from "../../actions/modal_action";
// import { withRouter } from 'react-router-dom'

const mSTP = (state) => {
    
    return{
  //   currentUser: state.entities.users[state.session.id],
  //   currentUserId: state.session.id,
    users: Object.values(state.entities.users)
    }
};

const mDTP = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
  //   openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(AllUsers);
// export default connect(mSTP, mDTP)(Navbar);

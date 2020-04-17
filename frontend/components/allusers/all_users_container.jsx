import React from "react";
import { connect } from "react-redux";
import  AllUsers  from "./all_users";
import { logout } from "../../actions/session_action";
import { getAllUsers } from "../../actions/user_action";
import {
  createFollow,
  deleteFollow,
  fetchFollows,
} from "../../actions/follow_action";


import { openModal } from "../../actions/modal_action";
// import { withRouter } from 'react-router-dom'

const mSTP = (state) => {
    
    return{
    currentUser: state.entities.users[state.session.id],
    followers: state.entities.follows ,
  //   currentUserId: state.session.id,
    follows: state.entities.users[state.session.currentUser] ? state.entities.users[state.session.currentUser].followee_ids.map(id => state.entities.users[id]) : [],
    users: Object.values(state.entities.users)
    }
};

const mDTP = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
  fetchFollows: () => dispatch(fetchFollows()),
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (id) => dispatch(deleteFollow(id)),
  //   openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(AllUsers);
// export default connect(mSTP, mDTP)(Navbar);

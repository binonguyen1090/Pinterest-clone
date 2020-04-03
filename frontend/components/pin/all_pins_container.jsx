import { connect } from "react-redux";
import AllPins from "./all_pins";
import {
  receivePinErrors,
  fetchPins,
  fetchAllUsersPins
} from "../../actions/pin_action";
import { fetchBoards } from "../../actions/board_action";
import { Link } from "react-router-dom";
import React from "react";
import Profile from "../profile/profile";
import { withRouter } from "react-router-dom";

import { openModal, closeModal } from "../../actions/modal_action";
import BoardIndexContainer from "../board/board_index_container";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: Object.values(state.entities.users),
    currentUserId: state.session.id,

    boardId: Object.keys(state.entities.boards),
    boards: Object.values(state.entities.boards),
    pins: Object.values(state.entities.pins),
    // pins: Object.values(state.entities.pins),
    errors: Object.values(state.errors.board)
    // pins: Object.values(state.entities.pins),
  };
};

const mDTP = dispatch => {
  return {
    // openModal: modal => dispatch(openModal(modal)),
    openModal: (modal, pinId) => dispatch(openModal(modal, { pinId })),

    fetchBoards: userId => dispatch(fetchBoards(userId)),
    fetchPins: () => dispatch(fetchPins()),
    fetchAllUsersPins: () => dispatch(fetchAllUsersPins()),
    receivePinErrors: errors => dispatch(receivePinErrors(errors))
    // closeModal: () => dispatch(closeModal()),
  };
};

// export default connect(mSTP, mDTP)(UserPins);
export default withRouter(connect(mSTP, mDTP)(AllPins));

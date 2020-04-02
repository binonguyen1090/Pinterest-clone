import { connect } from "react-redux";
import BoardPins from "./board_pin";
import {
  receivePinErrors,
  fetchPins,
  fetchOneBoardPins
} from "../../actions/pin_action";
import { fetchBoards } from "../../actions/board_action";
import { Link } from "react-router-dom";
import React from "react";
import Profile from "../profile/profile";
import { withRouter } from "react-router-dom";

import { openModal, closeModal } from "../../actions/modal_action";
import BoardIndexContainer from "../board/board_index_container";
// import { logout } from "../../actions/session_action";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId],
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
    openModal: modal => dispatch(openModal(modal)),

    fetchBoards: userId => dispatch(fetchBoards(userId)),
    fetchPins: () => dispatch(fetchPins()),
    fetchOneBoardPins: board_id => dispatch(fetchOneBoardPins(board_id)),
    receivePinErrors: errors => dispatch(receivePinErrors(errors))
    // closeModal: () => dispatch(closeModal()),
  };
};

// export default connect(mSTP, mDTP)(UserPins);
export default withRouter(connect(mSTP, mDTP)(BoardPins));

import { connect } from "react-redux";
import { fetchPin } from "../../actions/pin_action";
import { fetchBoard } from "../../actions/board_action";
import { getCreator } from "../../actions/user_action";
import {  } from "../../actions/user_action";
import PinShow from "./show_pin";
import { openModal, closeModal } from "../../actions/modal_action";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
  return {
    // board: state.entities.boards[ownProps.match.params.boardId],
    // currentUser: state.entities.users[state.session.id],
    // currentUserId: state.session.id
    pin: state.entities.pins[state.ui.modal.options.pinId],
    pinId: state.ui.modal.options.pinId,
    board: state.ui.boardCreator.board || "",
    user: state.ui.creator.user || "",
  };
};

const mDTP = dispatch => {
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    getCreator: (boardId) => dispatch(getCreator(boardId)),
    closeModal: () => dispatch(closeModal()),

  };
};

export default withRouter(connect(mSTP, mDTP)(PinShow));

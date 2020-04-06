import { connect } from "react-redux";
import { fetchPin } from "../../actions/pin_action";
import { fetchBoard } from "../../actions/board_action";
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
    board: state.entities.boards[0],
    // user: state.entities.users[0]
  };
};

const mDTP = dispatch => {
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),

    // fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    // openModal: modal => dispatch(openModal(modal)),
    // fetchBoards: userId => dispatch(fetchBoards(userId)),
    // fetchPins: () => dispatch(fetchPins())
  };
};

export default withRouter(connect(mSTP, mDTP)(PinShow));

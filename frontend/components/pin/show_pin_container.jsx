import { connect } from "react-redux";
import {
  fetchPin,
  createPin,
  receivePinErrors,
} from "../../actions/pin_action";
import { fetchBoard, fetchBoards , movePintoBoard} from "../../actions/board_action";
import { getCreator } from "../../actions/user_action";
import {  } from "../../actions/user_action";
import PinShow from "./show_pin";
import { openModal, closeModal } from "../../actions/modal_action";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
  
  return {
    boards: Object.values(state.entities.boards),
    pin: state.entities.pins[state.ui.modal.options.pinId],
    pinId: state.ui.modal.options.pinId,
    board: state.ui.boardCreator.board || "",
    user: state.ui.creator.user || "",
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    getCreator: (boardId) => dispatch(getCreator(boardId)),
    movePintoBoard: (pin, boardId) => dispatch(movePintoBoard(pin, boardId)),
    closeModal: () => dispatch(closeModal()),
    createPin: (pin) => dispatch(createPin(pin)),
    receivePinErrors: (errors) => dispatch(receivePinErrors(errors)),
  };
};

export default withRouter(connect(mSTP, mDTP)(PinShow));

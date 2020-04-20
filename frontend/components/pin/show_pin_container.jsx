import { connect } from "react-redux";
import {
  fetchPin,
  createPin,
  receivePinErrors,
} from "../../actions/pin_action";
// import {
//   createLike, deleteLike, fetchLikes
// } from "../../actions/like_action";
import { fetchBoard, fetchBoards , movePintoBoard} from "../../actions/board_action";
import { getCreator } from "../../actions/user_action";
import {  } from "../../actions/user_action";
import PinShow from "./show_pin";
import { openModal, closeModal } from "../../actions/modal_action";
import { withRouter } from "react-router-dom";
import { likePin, unLikePin } from "../../actions/pin_action";

const mSTP = (state, ownProps) => {
  
  return {
    // likes: state.entities.likes.like_counts || 0,
    // likes: Object.values(state.entities.likes).length || 0,
    entities: state.entities,
    boards: Object.values(state.entities.boards),
    pin: state.entities.pins[state.ui.modal.options.pinId],
    pinId: state.ui.modal.options.pinId,
    board: state.ui.boardCreator.board || "",
    user: state.ui.creator.user || "",
    currentUser: state.entities.users[state.session.id],
    currentUserPins: Object.values(state.entities.users[state.session.id]).pins || []
  };
};

const mDTP = dispatch => {
  
  return {
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    // fetchLikes: (pinId) => dispatch(fetchLikes(pinId)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    getCreator: (boardId) => dispatch(getCreator(boardId)),
    movePintoBoard: (pin, boardId) => dispatch(movePintoBoard(pin, boardId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    createPin: (pin) => dispatch(createPin(pin)),
    // createLike: (pin) => dispatch(createLike(pin)),
    // deleteLike: (id) => dispatch(deleteLike(id)),
    likePin: (id) => dispatch(likePin(id)),
    unLikePin: (id) => dispatch(unLikePin(id)),
    receivePinErrors: (errors) => dispatch(receivePinErrors(errors)),
  };
};

export default withRouter(connect(mSTP, mDTP)(PinShow));

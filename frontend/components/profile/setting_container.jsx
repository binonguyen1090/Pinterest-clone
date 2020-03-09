import { connect } from "react-redux";
import ProfileSetting from "./setting";
import { updateUser } from "../../actions/user_action";
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_action";


const mSTP = (state, oP) => {
    // debugger
    return {
        user: state.entities.users[state.session.id],
        userId: state.session.id,
        // errors: state.errors.session,
        // errors: state.errors.board,
        // currentUser: state.entities.users[state.session.id],
        // board: state.entities.boards[state.ui.modal.options.boardId],
        // boardId: state.ui.modal.options.boardId
        // boardId: state.ui.modal.boardId,
        // board: state.entities.boards[oP.match.params.eventId],
        // board: state.events[oP.match.params.eventId],
        // formType: "Create Board",
    }

};

const mDTP = dispatch => {
    // debugger
    return {
        // fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
        // deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
        // openModal: (modal) => dispatch(openModal(modal)),
        // updateBoard: board => dispatch(updateBoard(board)),
        updateUser: user => dispatch(updateUser(user)),
        // clearError: () => dispatch(receiveErrors([])),
        // closeModal: () => dispatch(closeModal()),
    }

};

export default connect(mSTP, mDTP)(ProfileSetting);
import { connect } from "react-redux";
import EditBoardForm from "./edit_board";
import {
  updateBoard,
  deleteBoard,
  fetchBoards,
  fetchBoard
} from "../../actions/board_action";
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_action";

const mSTP = (state, oP) => {
  return {
    errors: state.errors.board,
    currentUser: state.entities.users[state.session.id],
    board: state.entities.boards[state.ui.modal.options.boardId],
    boardId: state.ui.modal.options.boardId

    // formType: "Create Board",
  };
};

const mDTP = dispatch => {
  return {
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    openModal: modal => dispatch(openModal(modal)),
    updateBoard: board => dispatch(updateBoard(board)),
    clearError: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(EditBoardForm);

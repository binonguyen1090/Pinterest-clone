import { connect } from "react-redux";
import BoardForm from "./board_form";
import { createBoard } from "../../actions/board_action";
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_action";


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.board,
    // board : state.entities.boards

    // formType: "Create Board",

});

const mDTP = dispatch => ({
    // openModal: modal => dispatch(openModal(modal)),
    // clearError: () => dispatch(receiveErrors([])),
    createBoard: board => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal()),

});

export default connect(mSTP, mDTP)(BoardForm);
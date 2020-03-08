import { connect } from "react-redux";
import BoardForm from "./board_form";
import { createBoard } from "../../actions/board_action";
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_action";


const mSTP = state => ({
    // errors: state.errors.board,
    board: {
        date: '',
        description: ''},
    currentUser: state.entities.users[state.session.id],
    board : state.entities.boards

    // formType: "Create Board",

});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    createBoard: board => dispatch(createBoard(board)),
    clearError: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal()),

});

export default connect(mSTP, mDTP)(BoardForm);
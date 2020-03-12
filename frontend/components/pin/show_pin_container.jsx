import { connect } from "react-redux";
import ShowPin from "./show_pin";
import { createPin, receivePinErrors, fetchPins, fetchPin } from "../../actions/pin_action";
import { fetchBoards } from "../../actions/board_action";
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_action";
import BoardIndexContainer from '../board/board_index_container'
// import { logout } from "../../actions/session_action";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        boardId: Object.keys(state.entities.boards),
        boards: Object.values(state.entities.boards),
        pins: Object.values(state.entities.pins),
        errors: Object.values(state.errors.board),
        // pins: Object.values(state.entities.pins),


    }
};

const mDTP = dispatch => {
    return {

        // fetchBoards: userId => dispatch(fetchBoards(userId)),
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        // createPin: (pin) => dispatch(createPin(pin)),
        receivePinErrors: errors => dispatch(receivePinErrors(errors)),
        closeModal: () => dispatch(closeModal()),
    }
};

export default connect(mSTP, mDTP)(ShowPin);
import { connect } from "react-redux";
import Board from "./board_index";
import { fetchBoards } from '../../actions/board_action';
import BoardIndex from '../board/board_index'

// import { logout } from "../../actions/session_action";

const mSTP = state => ({
    // currentUser: state.entities.users[state.session.id],
    // boards: Object.values(state.entities.boards)
});

const mDTP = dispatch => ({
    // fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    // deleteEvent: eventId => dispatch(deleteEvent(eventId))
});

export default connect(null, null)(BoardIndex);
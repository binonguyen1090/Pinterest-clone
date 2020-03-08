import { connect } from "react-redux";
import { fetchBoards } from '../../actions/board_action';
import BoardIndex from '../board/board_index'
import { withRouter } from 'react-router-dom';


const mSTP = state => ({
    currentUserId: state.session.id,
    boards: Object.values(state.entities.boards),
    currentUser: state.entities.users[state.session.id]
    // user: state.entities.users[ownProps.match.params.userId] 

});

const mDTP = dispatch => ({
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),

    // deleteEvent: eventId => dispatch(deleteEvent(eventId))
});

export default connect(mSTP, mDTP)(BoardIndex);
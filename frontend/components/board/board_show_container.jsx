import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/board_action';
import BoardShow from './board_show';
import { openModal, closeModal } from "../../actions/modal_action";
import { withRouter } from 'react-router-dom';



const mSTP = (state, ownProps) => {

    return {
    board: state.entities.boards[ownProps.match.params.boardId],
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    }

}

const mDTP = dispatch => {

    return {
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchBoards: userId => dispatch(fetchBoards(userId)),
    fetchPins: () => dispatch(fetchPins()),
    }
}

export default withRouter((connect(mSTP, mDTP)(BoardShow))); 



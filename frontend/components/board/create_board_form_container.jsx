import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_action';
import BoardForm from './board_form';
// import { openModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom';
const mSTP = state => ({
    board: {
        title: '',
        body: ''
    },
    // formType: 'Create Board'
    currentUser: state.entities.users[state.session.id]})
    

const mDTP = dispatch => ({
    // createBoard: board => dispatch(createBoard(board))
})

export default connect(mSTP, null)(BoardForm)





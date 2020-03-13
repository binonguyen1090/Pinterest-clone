import { connect } from "react-redux";
import AllPins from "./all_pins";


import { withRouter } from 'react-router-dom';

import { openModal, closeModal } from "../../actions/modal_action";
import { debug } from "webpack";



const mSTP = (state, ownProps) => {
    debugger
    return {
        currentUser: state.entities.users[state.session.id],
        // user: state.entities.users[ownProps.match.params.userId],
        // currentUserId: state.session.id,

        // boardId: Object.keys(state.entities.boards),
        // boards: Object.values(state.entities.boards),
        // pins: Object.values(state.entities.pins),
        // errors: Object.values(state.errors.board),
        // pins: Object.values(state.entities.pins),
        // pins: Object.values(state.entities.pins),


    }
};

const mDTP = dispatch => {
    debugger
    return {
        // openModal: modal => dispatch(openModal(modal)),
        fetchAllUsersPins: () => dispatch(fetchAllUsersPins()),
        // receivePinErrors: errors => dispatch(receivePinErrors(errors)),
    }
};

// export default connect(mSTP, mDTP)(UserPins);
export default withRouter((connect(mSTP, mDTP)(AllPins))); 

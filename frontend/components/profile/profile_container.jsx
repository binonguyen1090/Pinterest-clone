import { connect } from "react-redux";
import Profile from "./profile";
// import { logout } from "../../actions/session_action";
import { openModal } from "../../actions/modal_action";


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),

});

export default connect(mSTP, mDTP)(Profile);
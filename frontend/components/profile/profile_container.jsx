import { connect } from "react-redux";
import Profile from "./profile";
// import { logout } from "../../actions/session_action";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(Profile);
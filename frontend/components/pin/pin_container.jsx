import { connect } from "react-redux";
import Pin from "./pin";
// import { logout } from "../../actions/session_action";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(Pin);
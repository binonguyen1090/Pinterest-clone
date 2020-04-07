import { connect } from "react-redux";
import UserPage from "./user_page";
import { openModal } from "../../actions/modal_action";
import { getUser } from "../../actions/user_action";

const mSTP = (state, ownProps) => {
    return {
      userId: ownProps.match.params.userId,
      user: state.ui.userpage.user || "",
    };
};

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  getUser: (id) => dispatch(getUser(id)),
});

export default connect(mSTP, mDTP)(UserPage);

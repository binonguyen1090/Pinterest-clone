import { connect } from "react-redux";
import Splash from "./splash";

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

export default connect(mSTP, null)(Splash);

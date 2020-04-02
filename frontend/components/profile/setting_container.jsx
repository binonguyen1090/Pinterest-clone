import { connect } from "react-redux";
import ProfileSetting from "./setting";
import { updateUser } from "../../actions/user_action";
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_action";

const mSTP = (state, oP) => {
  return {
    user: state.entities.users[state.session.id],
    userId: state.session.id
  };
};

const mDTP = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(mSTP, mDTP)(ProfileSetting);

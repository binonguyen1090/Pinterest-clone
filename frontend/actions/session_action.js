import {
  followUser,
  unfollowUser,
  postUser,
  postSession,
  destroySession,
  patchUser
} from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const getfollowUser = id => ({
  type: FOLLOW_USER,
  id
});

export const getunfollowUser = id => ({
  type: UNFOLLOW_USER,
  id
});


export const signup = user => dispatch =>
  postUser(user).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
  );

export const login = user => dispatch =>
  postSession(user).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
  );

export const logout = () => dispatch =>
  destroySession().then(() => dispatch(logoutCurrentUser()));


  // follow
export const follow = userId => dispatch =>{
    debugger
    return followUser(userId).then(
    userId => dispatch(getfollowUser(userId))
  )};
export const unfollow = userId => dispatch =>
  unfollowUser(userId).then(
    userId => dispatch(getunfollowUser(userId))
  );
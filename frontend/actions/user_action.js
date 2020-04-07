import { patchUser, fetchUsers, fetchCreator } from "../util/user_api.util";
import { receiveErrors, receiveCurrentUser } from "./session_action";

export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";


export const updateUser = user => dispatch =>
  patchUser(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
});
const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};
export const getCreator = id => dispatch => {
  
  return fetchCreator(id)
    .then(user => dispatch(receiveSingleUser(user)))
};


export const getUser = id => dispatch => {

  return fetchCreator(id)
    .then(user => dispatch(receiveSingleUser(user)))
};


export const getAllUsers = () => dispatch =>{
  debugger

  return fetchUsers().then(users => dispatch(receiveAllUsers(users)))};
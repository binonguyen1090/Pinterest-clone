import { patchUser, fetchUsers} from '../util/user_api.util'
import {receiveErrors, receiveCurrentUser} from './session_action'

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const updateUser = user => dispatch =>
    patchUser(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    );


const receiveAllUsers = users => {
    // const pins = payload.pins
    return ({
        type: RECEIVE_ALL_USERS,
        users
    })
};

// export const requestUsers = () => dispatch => {
//     return fetchUsers()
//         .then(users => dispatch(receiveAllUsers(users)))
// };



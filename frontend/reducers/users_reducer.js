import { RECEIVE_CURRENT_USER } from '../actions/session_action'
// import { RECEIVE_ALL_USERS } from '../actions/user_action'

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        // case RECEIVE_ALL_USERS:
        //     return action.users
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        default:
            return state;
    }
}
export default usersReducer;
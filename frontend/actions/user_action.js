import { patchUser, fetchUsers } from "../util/user_api.util";
import { receiveErrors, receiveCurrentUser } from "./session_action";

export const updateUser = user => dispatch =>
  patchUser(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

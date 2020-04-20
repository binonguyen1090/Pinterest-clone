import * as PinApiUtil from "../util/pin_api_util";

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
import { postLikeToPin, deleteLikeFromPin} from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES'

const receiveLike = like => {
    // debugger
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = like => {
    return {
        type: REMOVE_LIKE,
        like
    }
}


const receiveAllPins = pins => {
  return {
    type: RECEIVE_ALL_PINS,
    pins
  };
};
export const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});
const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

const removePin = payload => ({
  type: REMOVE_PIN,
  pinId: payload.id,
  userId: payload.user_id,
  boardId: payload.board_id
});
export const updatePin = pin => dispatch => (
  PinApiUtil.updatePin(pin).then(pin => dispatch(receivePin(pin)))
);
export const fetchPins = () => dispatch =>
  PinApiUtil.fetchPins().then(pins => dispatch(receiveAllPins(pins)));

export const fetchPin = PinId => dispatch =>
  PinApiUtil.fetchPin(PinId).then(pin => dispatch(receivePin(pin)));

export const createPin = pin => dispatch => {
  // debugger
  return PinApiUtil.createPin(pin).then(
    pin => dispatch(receivePin(pin)),
    errors => dispatch(receivePinErrors(errors.responseJSON))
  );
};

export const deletePin = pinId => dispatch =>
  PinApiUtil.deletePin(pinId).then(pinId => dispatch(removePin(pinId)));

export const fetchOneUserPins = user_id => dispatch => {
  return PinApiUtil.fetchOneUserPins(user_id).then(pins =>
    dispatch(receiveAllPins(pins))
  );
};

export const fetchOneBoardPins = board_id => dispatch => {
  return PinApiUtil.fetchOneBoardPins(board_id).then(pins =>
    dispatch(receiveAllPins(pins))
  );
};

export const fetchAllUsersPins = () => dispatch => {
  return PinApiUtil.fetchAllUsersPins().then(pins =>
    dispatch(receiveAllPins(pins))
  );
};


export const likePin = id => dispatch => {
  return postLikeToPin(id)
    .then(like => dispatch(receiveLike(like)));
}

export const unLikePin = id => dispatch => {
  return deleteLikeFromPin(id)
    .then(like => dispatch(receiveLike(like)));
}

import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";

const receiveAllPins = pins => {
    // const pins = payload.pins
    return {
        type: RECEIVE_ALL_PINS,
        pins
    }
};
export const receivePinErrors = (errors) => ({
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


export const fetchPins = () => dispatch => (
    PinApiUtil.fetchPins().then(pins => dispatch(receiveAllPins(pins)))
);

export const fetchPin = PinId => dispatch => (
    PinApiUtil.fetchPin(PinId).then(pin => dispatch(receivePin(pin)))
    );
    
export const createPin = (pin) => dispatch => (
    PinApiUtil.createPin(pin)
    .then(pin => dispatch(receivePin(pin)),
    errors => dispatch(receivePinErrors(errors.responseJSON))
    )
    );
    
export const deletePin = pinId => dispatch => (
    PinApiUtil.deletePin(pinId).then(pinId => dispatch(removePin(pinId)))
    );
        
            
export const fetchOneUserPins = (user_id) => dispatch => {
    debugger

    return PinApiUtil.fetchOneUserPins(user_id)
        .then(pins => dispatch(receiveAllPins(pins)))
};

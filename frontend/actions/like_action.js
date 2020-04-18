import * as APIUtil from '../util/like_api_util';

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

const receiveLikes = likes => {
    // debugger
    return {
        type: RECEIVE_LIKES,
        likes
    }
}

export const fetchLikes = () => {
    return dispatch => {
        return APIUtil.fetchLikes().then(likes => dispatch(receiveLikes(likes)))
    }
}

export const createLike = (like) => {
    // debugger
    return dispatch => {
        return APIUtil.createLike(like).then(like => dispatch(receiveLike(like)))
    }
}

export const deleteLike = (like) => {
    debugger
    return dispatch => {
        return APIUtil.deleteLike(like).then(like => dispatch(removeLike(like)))
    }
}
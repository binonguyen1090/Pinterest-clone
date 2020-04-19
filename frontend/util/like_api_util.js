export const postLikeToPin = id => {
    debugger
    return $.ajax({
        url: '/api/likes',
        method: 'POST',
        data: { id }
    });
}

export const deleteLikeFromPin = id => {
    debugger
    return $.ajax({
        url: '/api/likes',
        method: 'DELETE',
        data: { id }
    });
}

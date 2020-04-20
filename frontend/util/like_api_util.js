export const postLikeToPin = id => {
 
    return $.ajax({
        url: '/api/likes',
        method: 'POST',
        data: { id }
    });
}

export const deleteLikeFromPin = id => {
  
    return $.ajax({
        url: '/api/likes',
        method: 'DELETE',
        data: { id }
    });
}

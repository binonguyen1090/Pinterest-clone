export const createLike = like => {
    // debugger
    return $.ajax({
        method: "POST",
        url: "/api/likes",
        data: { like }
    });
};

export const deleteLike = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/likes/`,
        data: { id }
    });
};


export const fetchLikes = () => {
    // debugger
    return $.ajax({
        method: "GET",
        url: `/api/likes`,
    });
};
export const getAllResults = (query) => {
    return $.ajax({
        method: 'GET',
        url: `api/searchs`,
        data: {query}
    })
};
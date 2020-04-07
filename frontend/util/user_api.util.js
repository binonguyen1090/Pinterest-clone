export const patchUser = user => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user }
  });
};

export const fetchUsers = () =>{
  
  return $.ajax({
    method: "GET",
    url: `api/users/`
  })};


export const fetchCreator = (id) => {
  
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`,
  })
};
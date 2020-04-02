export const patchUser = user => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: "PATCH",
    data: { user }
  });
};

export const fetchUsers = () =>
  $.ajax({
    method: "GET",
    url: `api/users/`
  });

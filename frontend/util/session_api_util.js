//postUser , postSession, destrou

export const postUser = user => {
  return $.ajax({
    url: "api/users",
    method: "POST",
    data: { user }
  });
};

export const postSession = user => {
  return $.ajax({
    url: "api/session",
    method: "POST",
    data: { user }
  });
};

export const destroySession = () => {
  return $.ajax({
    url: "api/session",
    method: "DELETE"
  });
};

//follow
export const followUser = user_id => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/follows`,
    data: { user_id},

  });
};

export const unfollowUser = user_id => {
  debugger
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows`,
    data: { user_id},
  });
};

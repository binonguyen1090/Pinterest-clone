export const fetchAllUsersPins = () => {
  return $.ajax({
    method: "GET",
    url: `/api/pins/`
  });
};

export const fetchOneUserPins = user_id => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${user_id}/pins`
  });
};
export const fetchOneBoardPins = board_id => {
  return $.ajax({
    method: "GET",
    url: `/api/boards/${board_id}/pins`
  });
};
export const fetchPins = () =>
  $.ajax({
    method: "GET",
    url: `api/pins/`
  });

export const fetchPin = pinId =>
  $.ajax({
    method: "GET",
    url: `api/pins/${pinId}`
  });

export const createPin = pin => {
  return $.ajax({
    url: "/api/pins",
    method: "POST",
    data: pin,
    contentType: false,
    processData: false
  });
};

export const updatePin = pin => {
  
  return $.ajax({
    url: `api/pins/${pin.id}`,
    method: "PATCH",
    data: { pin }
  });
};

export const deletePin = id =>
  $.ajax({
    url: `api/pins/${id}`,
    method: "DELETE"
  });


export const updateUser = payload => {
  return {
    type: 'UPDATE_USER',
    payload: payload
  };
}

export const updateNotification = payload => {
  return {
    type: 'UPDATE_NOTIFICATION',
    payload: payload
  };
}

export const updateUserStateFromApi = payload => {
  return {
    type: 'UPDATE_USER_STATE_FROM_API',
    payload: payload
  };
}

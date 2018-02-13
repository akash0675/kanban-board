export const updateUsername = username => {
  return {
    type: 'UPDATE_USERNAME',
    payload: username
  };
};

export const updatePassword = password => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: password
  };
};

export const updateRemeberMe = value => {
  return {
    type: 'UPDATE_REMEMBER_ME',
    payload: value
  };
};

export const loginLoadingTrue = () => {
  return {
    type: 'LOGIN_LOADING_TRUE'
  };
}

export const loginLoadingFalse = () => {
  return {
    type: 'LOGIN_LOADING_FALSE'
  };
}

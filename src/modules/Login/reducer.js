const initialState = {
  username: '',
  password: '',
  rememberMe: false,
  isLoginLoading: false
};

const loginReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USERNAME':
      return { ...state, username: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    case 'UPDATE_REMEBER_ME':
      return { ...state, rememberMe: action.payload };
    case 'LOGIN_LOADING_TRUE':
      return { ...state, isLoginLoading: true };
    case 'LOGIN_LOADING_FALSE':
      return { ...state, isLoginLoading: false };
    default:
      return state;
  }
};

export default loginReducer;

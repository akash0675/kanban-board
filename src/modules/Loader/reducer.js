const initialState = {
  isLoadervisible: false,
};

const loaderReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SHOW_LOADER':
      return { ...state, isLoaderVisible: true };
    case 'HIDE_LOADER':
      return { ...state, isLoaderVisible: false };
    default:
      return state;
  }
}

export default loaderReducer; 
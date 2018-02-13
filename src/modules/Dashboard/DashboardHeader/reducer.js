const initialState = {
  user: {
    userName: 'Akash Talreja'
  },
  notifications: {
    count: 5,
    notificationList: []
  },
};

const dashboardHeaderReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USER':
      return state;
    case 'UPDATE_NOTIFICATION':
      return state;
    case 'UPDATE_USER_STATE_FROM_API':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default dashboardHeaderReducer;

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginReducer from './Login/reducer';
import dashboardReducer from './Dashboard/reducer';
import loaderReducer from './Loader/reducer';

export default combineReducers({
  routing: routerReducer,
  login: loginReducer,
  dashboard: dashboardReducer,
  loader: loaderReducer
});
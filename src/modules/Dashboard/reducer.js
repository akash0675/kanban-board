import { combineReducers } from 'redux';
import addProjectModalReducer from './AddProjectModal/reducer';
import dashboardMenuReducer from './DashboardMenu/reducer';
import dashboardHeaderReducer from './DashboardHeader/reducer';
import boardReducer from './Board/reducer';

export default combineReducers({
  menu: dashboardMenuReducer,
  header: dashboardHeaderReducer,
  addProject: addProjectModalReducer,
  board: boardReducer
});

//  const initialState = {
//    projects: [],
//    interns: [],
//    user: {}
//  }
//  
//  const dashboardReducer = (state=initialState, action) => {
//    switch(action.type) {
//      default:
//        return state;
//    }
//  }
//  
//  export default dashboardReducer;
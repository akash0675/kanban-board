const initialState = {
  projects: [],
  interns: [
    {
      internName: '',
      internId: ''
    }
  ]
}

const dashboardMenuReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_PROJECTS_TO_MENU_FROM_API':
      return { ...state, projects: action.payload };
    case 'ADD_PROJECT_FROM_DASHBOARD': {
      let _projects = [ ...state.projects ];
      let projectObject = {
        projectName: action.payload
      }
      _projects.push(projectObject);
      return { ...state, projects: _projects }
    }
    case 'ADD_INTERNS':
      return state;
    default:
      return state;
  }
}

export default dashboardMenuReducer;

export const addProjectsToMenuFromApi = payload => {
  return {
    type: 'ADD_PROJECTS_TO_MENU_FROM_API',
    payload: payload
  };
}

export const addInterns = payload => {
  return {
    type: 'ADD_INTERNS',
    payload: payload
  };
}

export const addProjectFromDashboard = payload => {
  return {
    type: 'ADD_PROJECT_FROM_DASHBOARD',
    payload: payload
  };
}

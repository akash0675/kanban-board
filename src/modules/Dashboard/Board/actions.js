export const addProject = payload => {
  return {
    type: 'ADD_PROJECT',
    payload: payload,
  };
}

export const addProjectsFromAPI = payload => {
  return {
    type: 'ADD_PROJECTS_FROM_API',
    payload: payload
  };
}

export const addList = payload => {
  return {
    type: 'ADD_LIST',
    payload:payload
  };
}

export const deleteList = payload => {
  return {
    type: 'DELETE_LIST',
    payload: payload
  };
}

export const addTask = payload => {
  return {
    type: 'ADD_TASK',
    payload: payload
  };
}

export const deleteTask = payload => {
  return {
    type: 'DELETE_TASK',
    payload: payload
  };
}

export const changeSelectedProjectIndex = payload => {
  return {
    type: 'CHANGE_SELECTED_PROJECT_INDEX',
    payload: payload
  };
}


export const showAddProjectModal = () => {
  return {
    type: 'SHOW_ADD_PROJECT_MODAL',
    payload: true,
  };
}

export const hideAddProjectModal = () => {
  return {
    type: 'HIDE_ADD_PROJECT_MODAL',
    payload: false
  };
}

export const updateProjectName = payload => {
  return {
    type: 'UPDATE_PROJECT_NAME',
    payload: payload
  };
}

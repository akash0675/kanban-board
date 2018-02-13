const initialState = {
  isModalVisible: false,
  project: {
    projectName: '',
  }
}

const addProjectModalReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SHOW_ADD_PROJECT_MODAL':
      return { ...state, isModalVisible: action.payload };
    case 'HIDE_ADD_PROJECT_MODAL':
      return { ...state, isModalVisible: action.payload };
    case 'UPDATE_PROJECT_NAME': {
      let _project = state.project;
      _project.projectName = action.payload;
      return { ...state, project: _project };
    }
    default:
      return state;
  }
}

export default addProjectModalReducer;

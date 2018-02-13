const initialState = {
  projects: [],
  selectedProjectIndex: 0,
}

const boardReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_PROJECTS_FROM_API':
      return { ...state, projects: action.payload };
    case 'ADD_PROJECT': {
      let _projects = [ ...state.projects ];
      let projectObject = {
        projectName: action.payload,
        projectLists: []
      }
      console.log(_projects)
      _projects.push(projectObject);
      return { ...state, projects: _projects };
    }
    case 'ADD_LIST': {
      let _projects = [ ...state.projects ];
      let listObject = {
        listName: action.payload.listName,
        taskList: []
      };
      _projects[action.payload.projectId].projectLists.push(listObject);
      return { ...state, projects: _projects };
    }
    case 'DELETE_LIST': {
      let _projects = [ ...state.projects ];
      _projects[action.payload.projectId].projectLists.splice(action.payload.listId, 1);
      return { ...state, projects: _projects };
    }
    case 'ADD_TASK': {
      let _projects = [ ...state.projects ];
      let taskObject = {
        taskText: action.payload.text
      };
      _projects[action.payload.projectId].projectLists[action.payload.listId].taskList.push(taskObject);
      return { ...state, projects: _projects };
    }
    case 'DELETE_TASK': {
      let _projects = [ ...state.projects ];
      _projects[action.payload.projectId].projectLists[action.payload.listId].taskList.splice(action.payload.cardId, 1);
      return { ...state, projects: _projects };
    }
    case 'CHANGE_SELECTED_PROJECT_INDEX':
      return { ...state, selectedProjectIndex: action.payload };
    default:
      return state;
  }
}

export default boardReducer;
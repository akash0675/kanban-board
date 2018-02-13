import request from 'superagent';
import { BaseEndpointUrl } from './../constants/projectServiceConstants';
import { addProjectsToMenuFromApi } from './../modules/Dashboard/DashboardMenu/actions';
import { addProjectsFromAPI } from './../modules/Dashboard/Board/actions';
import { hideLoader } from './../modules/Loader/actions';

export const getProjects = () => {
  return dispatch =>
    request
      .get(`${BaseEndpointUrl}/projects`)
      .end((err, res) => {
        if(err) {
          console.log(err);
        } else {
          var projects = res.body.data.projects;
          dispatch(addProjectsFromAPI(projects));
          var menu = projects.reduce((currentValue, nextItem) => {
            return [ ...currentValue, {projectName: nextItem.projectName, projectId: nextItem.projectId} ];
          }, []);
          dispatch(addProjectsToMenuFromApi(menu))
          dispatch(hideLoader())
        }
      })
  
}
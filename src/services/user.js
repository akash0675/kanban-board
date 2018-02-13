import request from 'superagent';
import { BaseEndpointUrl } from './../constants/projectServiceConstants';
import { updateUserStateFromApi } from './../modules/Dashboard/DashboardHeader/actions';
import { push } from 'react-router-redux';

export const getUser = () => {
  return (dispatch, getState) => {
    request
      .post(`${BaseEndpointUrl}/user`)
      .send({
        username: getState().login.username,
        password: getState().login.password
      })
      .then((res) => {
        dispatch(push('/dashboard'))
        dispatch(updateUserStateFromApi(res.body));
      })
  }
}

export default getUser;


// authorization

import axios from "axios";
import { setStoreAuthorized, setStoreUser } from '../actions/actionCreators';
import getTasks from './getTasks';

// получить 
const authorization = (url, api) => {
  return axios.get(`${url}/users/current.json?key=${api}`)
    .then(response => {
      let data = JSON.parse(response.request.response);
      let userLogin = data.user.login;

      setStoreAuthorized(true); // изменяем статус на "authorized" на true
      setStoreUser(userLogin, api, url); // записываем данные пользователя
      getTasks(url, api); // получить список задач

      localStorage.setItem('url', url);
      localStorage.setItem('api', api);

      // console.log("authorization => response \n", response);
      return response;
    })
    .catch(function (error) {
      setStoreAuthorized(false); // изменяем статус на "authorized" на false

      localStorage.removeItem('url');
      localStorage.removeItem('api');

      console.log("authorization => error \n", error);
      return error;
    });
}

export default authorization;
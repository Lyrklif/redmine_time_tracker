
// authorization

import axios from "axios";
import { setStoreAuthorized, setStoreUser, setStoreApplicationStatus } from '../actions/actionCreators';
import getTasks from './getTasks';
import getStatistics from './getStatistics';

//TODO перенести всё, кроме запроса к redmine в другие функции
const authorization = (url, api) => {
  return axios.get(`${url}/users/current.json?key=${api}`)
    .then(response => {
      let data = JSON.parse(response.request.response);
      let userLogin = data.user.login;

      setStoreAuthorized(true); // изменяем статус на "authorized" на true
      setStoreUser(userLogin, api, url); // записываем данные пользователя
      getTasks(url, api); // получить список задач
      // getStatistics(url, api); // получить статистику

      localStorage.setItem('url', url);
      localStorage.setItem('api', api);

      setStoreApplicationStatus('skeleton', false);

      // console.log("authorization => success \n", response);
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
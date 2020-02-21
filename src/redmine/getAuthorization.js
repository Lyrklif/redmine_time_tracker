// authorization

import axios from "axios";

//TODO перенести всё, кроме запроса к redmine в другие функции
function getAuthorization(newUrl, newApi) {
  const url = newUrl ? newUrl : localStorage.getItem('url');
  const api = newApi ? newApi : localStorage.getItem('api');

  return axios.get(`${url}/users/current.json?key=${api}`)
    .then(response => {
      return response;
    })
    .catch(function (error) {
      console.log("authorization => error \n", error);
    });
}

export default getAuthorization;
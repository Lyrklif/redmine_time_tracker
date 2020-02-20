import axios from "axios";
import {setStoreStatistics} from '../actions/actionCreators';
import authorization from "./authorization";


//TODO [возможно] перенести всё, кроме запроса к redmine в другую функцию
const getStatistics = (name, command) => {
  const url = localStorage.getItem('url');
  const api = localStorage.getItem('api');

  if (!url || !api || !command) return null;

  return axios.get(`${url}/time_entries.json?key=${api}&${command}&user_id=me&=hours&limit=100`)
    .then(response => {
      const data = JSON.parse(response.request.response).time_entries;
      let hours = 0;
      data.forEach(elem => hours += elem.hours);
      hours = +hours.toFixed(2);

      setStoreStatistics(name, hours);

      //TODO попробовать передавать параметры так, чтобы не получать AxiosResponse
      //const { data } = response
      // return data;
    })
    .catch(function (error) {
      console.log("getStatistics => error \n", error);
      return error;
    });
};

export default getStatistics;
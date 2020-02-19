import axios from "axios";
import {setStoreStatistics} from '../actions/actionCreators';
import authorization from "./authorization";


// получить статистику
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
      // return hours;
    })
    .catch(function (error) {
      console.log("getStatistics => error \n", error);
      return error;
    });
};

export default getStatistics;
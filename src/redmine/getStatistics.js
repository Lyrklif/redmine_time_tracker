import axios from "axios";
import {setStoreTasks} from '../actions/actionCreators';


// получить
const getStatistics = (url, api) => {
  const globalTimer = new Date();
  // stringToSplit.split(separator)
  console.log('globalTimer', globalTimer);
  console.log('globalTimer', globalTimer.toISOString());
  let today = 'from=2020-02-19&to=2020-02-19';
  return axios.get(`${url}/time_entries.json?key=${api}&${today}&user_id=me&=hours&limit=100`)
    .then(response => {
      // let tasks = JSON.parse(response.request.response);

      // setStoreTasks(tasks.issues); // записать задачи

      let data = JSON.parse(response.request.response);
      let hours = data.time_entries;

      console.log("getStatistics => response \n", data);

      return response;
    })
    .catch(function (error) {
      console.log("getStatistics => error \n", error);
      return error;
    });
}

export default getStatistics;
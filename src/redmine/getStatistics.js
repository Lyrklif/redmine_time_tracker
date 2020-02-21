import axios from "axios";


async function  getStatistics(period){
  const url = localStorage.getItem('url');
  const api = localStorage.getItem('api');

  return axios.get(`${url}/time_entries.json?key=${api}&${period}&user_id=me&=hours&limit=100`)
    .then(response => {
      return response;
    })
    .catch(function (error) {
      console.log("getStatistics => error \n", error);
      return error;
    });
}

export default getStatistics;
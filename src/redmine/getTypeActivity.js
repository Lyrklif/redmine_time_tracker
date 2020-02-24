
import axios from "axios";


const getTypeActivity = () => {
  const url = localStorage.getItem('url');
  const api = localStorage.getItem('api');

  if (!url || !api) return false;

  return axios.get(`${url}/enumerations/time_entry_activities.json?key=${api}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log("getTypeActivity => error \n", error);
    });
};


export default getTypeActivity;
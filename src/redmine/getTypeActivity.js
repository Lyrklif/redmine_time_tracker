
import axios from "axios";

import getAuthorization from "./getAuthorization";


const getTypeActivity = () => {
  const url = localStorage.getItem('url');
  const api = localStorage.getItem('api');

  if (!url || !api) return null;

  return axios.get(`${url}/enumerations/time_entry_activities.json?key=${api}`)
    .then(response => {
      console.log("getTypeActivity => success \n", response);
      return response;
    })
    .catch(error => {
      console.log("getTypeActivity => error \n", error);
    });
};


export default getTypeActivity;

import axios from "axios";
import {setStoreStatistics} from '../actions/actionCreators';


import authorization from "./authorization";


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
      return error;
    });
};


export default getTypeActivity;
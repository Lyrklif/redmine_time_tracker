// timeEntries
import axios from "axios";
import { setStoreStatistics } from '../actions/actionCreators';


import authorization from "./authorization";



const timeEntries = (id, time, activity, comment) => {
  const url = localStorage.getItem('url');
  const api = localStorage.getItem('api');

  if (!url || !api || !time || !id) return null;

  let vrem = {
    time_entry: {
      issue_id: id,
      hours: time,
      activity_id: activity ? activity : 9,
      comments: comment ? comment : ''
    }
  }

  return axios.post(`${url}/time_entries.json?key=${api}`, vrem)
    .then(response => {
      console.log("timeEntries => success", response);
      // return hours;
    })
    .catch(error => {
      console.log("timeEntries => error \n", error);
      return error;
    });
};


export default timeEntries;
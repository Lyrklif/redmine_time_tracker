// timeEntries
import axios from "axios";
import {setStoreStatistics} from '../actions/actionCreators';


import getAuthorization from "./getAuthorization";


/**
 *
 * @param id
 * @param time
 * @param activity
 * @param comment
 * @returns {Promise<AxiosResponse<T>>|null}
 */
const timeEntries = (id, time, activity, comment) => {
  const url = localStorage.getItem('url');
  const api = localStorage.getItem('api');

  if (!url || !api || !time || !id) return null;

  let data = {
    time_entry: {
      issue_id: id,
      hours: time,
      activity_id: activity ? activity : 9,
      comments: comment ? comment : ''
    }
  };

  return axios.post(`${url}/time_entries.json?key=${api}`, data)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log("timeEntries => error \n", error);
    });
};


export default timeEntries;
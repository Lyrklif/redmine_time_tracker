// getTasks.js

import axios from "axios";
import { setStoreTasks } from '../actions/actionCreators';


// получить 
const getTasks = (url, api) => {
  return axios.get(`${url}/issues.json?key=${api}&assigned_to_id=me`)
    .then(response => {
      let tasks = JSON.parse(response.request.response);

      setStoreTasks(tasks.issues); // записать задачи

      // console.log("getTasks => response \n", response);
      return response;
    })
    .catch(function (error) {
      console.log("getTasks => error \n", error);
      return error;
    });
}

export default getTasks;
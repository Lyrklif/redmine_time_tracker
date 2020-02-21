import axios from "axios";

function getTasks() {
  const url = localStorage.getItem('url');
  const api = localStorage.getItem('api');

  return axios.get(`${url}/issues.json?key=${api}&assigned_to_id=me`)
    .then(response => {
      return response;
    })
    .catch(function (error) {
      console.log("getTasks => error \n", error);
    });
}

export default getTasks;



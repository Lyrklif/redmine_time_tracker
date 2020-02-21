// getUserData.js

import axios from "axios";

//TODO удалить или понадобится?

// const getUserData = (url, api) => {
//   return axios.get(`${url}/users/current.json?key=${api}`)
//     .then(response => {
//       let data = JSON.parse(response.request.response);
//       let userLogin = data.user.login;
//       let api_key = data.user.api_key;
//
//       // setStoreUser(userLogin, api_key, url); // записываем данные пользователя
//
//       return response;
//     })
//     .catch(function (error) {
//       console.log("authorization => error \n", error);
//     });
// };
//
// export default getUserData;
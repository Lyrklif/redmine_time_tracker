import axios from "axios";

function getAuthorization(key, newUrl, newApiOrLogin, pass) {
  console.log('auth', key, newUrl, newApiOrLogin, pass);
  
  const url = newUrl ? newUrl : localStorage.getItem("url");
  const apiOrLogin = newApiOrLogin ? newApiOrLogin : localStorage.getItem("api");

  let request;
  let requestParams = {};

  switch (key) {
    case "api":
      request = `${url}/users/current.json?key=${apiOrLogin}`;
      break;
    case "login":
      request = `${url}/users/current.json`;
      requestParams = {
        auth: {
          username: apiOrLogin,
          password: pass
        }
      };
      break;
    default:
      break;
  }

  return axios.get(request, requestParams)
    .then(response => {
      return response;
    })
    .catch(function (error) {
      console.log("authorization => error \n", error);
    });
}

export default getAuthorization;

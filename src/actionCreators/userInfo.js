import {UPD_USER_DATA} from "../variables/actionTypes";

export function userInfo(login, key, url) {
  return {
    type: UPD_USER_DATA,
    login: login,
    key: key,
    url: url
  };
}
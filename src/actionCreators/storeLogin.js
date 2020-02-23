import {UPD_LOGIN} from "../variables/actionTypes";

export function storeLogin(login) {
  return {
    type: UPD_LOGIN,
    login: login
  };
}
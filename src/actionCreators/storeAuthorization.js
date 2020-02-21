import {UPD_AUTHORIZED} from "../variables/actionTypes";

export function storeAuthorization(authorized) {
  return {
    type: UPD_AUTHORIZED,
    authorized: authorized
  };
}

import {UPD_NOT_SAVED_DATA} from "../variables/actionTypes";

export function notSavedData(value) {
  return {
    type: UPD_NOT_SAVED_DATA,
    value
  };
}
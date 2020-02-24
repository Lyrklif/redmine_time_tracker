// activities

import {UPD_ACTIVITIES} from "../variables/actionTypes";

export function activities(value) {
  return {
    type: UPD_ACTIVITIES,
    value
  };
}
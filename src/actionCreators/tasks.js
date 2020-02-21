import {UPD_TASKS} from "../variables/actionTypes";

export function tasks(value) {
  return {
    type: UPD_TASKS,
    value
  }
}
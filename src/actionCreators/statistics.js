// statistics
import {UPD_STATISTICS} from "../variables/actionTypes";

export function statistics(name, value) {
  return {
    type: UPD_STATISTICS,
    name: name,
    value: value
  };
}
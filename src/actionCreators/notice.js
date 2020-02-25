// alert

import {UPD_NOTICE} from "../variables/actionTypes";

export function notice(show, type, text) {
  return {
    type: UPD_NOTICE,
    notice: {
      show: show,
      type: type,
      text: text
    }
  };
}
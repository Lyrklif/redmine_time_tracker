
import {UPD_MODAL} from "../variables/actionTypes";

export function modal(show, title, text) {
  return {
    type: UPD_MODAL,
    modal: {
      show: show,
      title: title,
      text: text
    }
  };
}
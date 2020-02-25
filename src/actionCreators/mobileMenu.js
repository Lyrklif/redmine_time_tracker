

import {UPD_MOBILE_MENU} from "../variables/actionTypes";

export function mobileMenu(value) {
  return {
    type: UPD_MOBILE_MENU,
    value
  };
}
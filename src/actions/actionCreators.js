// actionCreators Генераторы экшенов
import mainStore from '../store/mainStore';

import {
  UPD_MAIN_STORE,
  UPD_TEXT,
  UPD_SELECTED_TEXT,
  UPD_TAG_PARAMETERS,
  UPD_TASKS,
  UPD_AUTHORIZED,
  UPD_USER_DATA,
} from './actionTypes';

/*
 * генераторы экшенов
 */

// обновить setStoreTasks
export function setStoreTasks(value) {
  mainStore.dispatch({ type: UPD_TASKS, value });
}

// обновить authorized
export function setStoreAuthorized(authorized) {
  mainStore.dispatch({ type: UPD_AUTHORIZED, authorized: authorized });
}

export function setStoreUser(login, key, url) {
  mainStore.dispatch({
    type: UPD_USER_DATA,
    login: login,
    key: key,
    url: url
  });
}

// обновить статусы
export function updStates(name, value) {
  updStore({
    group: 'states',
    name: name,
    value: value
  });
}

// обновить данные
export function updStore(value) {
  mainStore.dispatch({ type: UPD_MAIN_STORE, value });
}

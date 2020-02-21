// actionCreators Генераторы экшенов
import mainStore from '../store/mainStore';

import {
  UPD_APPLICATION_STATUS,
  UPD_AUTHORIZED,
  UPD_MAIN_STORE,
  UPD_TASKS,
  UPD_USER_DATA,
} from '../variables/actionTypes';

/*
 * генераторы экшенов
 */
//TODO вынести dispatch из action creators

// обновить setStoreTasks
export function setStoreTasks(value) {
  mainStore.dispatch({type: UPD_TASKS, value});
}

export function tasks(value) {
  return {
    type: UPD_TASKS,
    value
  }
}

// обновить authorized
export function setStoreAuthorized(authorized) {
  mainStore.dispatch({type: UPD_AUTHORIZED, authorized: authorized});
}

export function setStoreApplicationStatus(name, value) {
  mainStore.dispatch({
    type: UPD_APPLICATION_STATUS,
    name: name,
    value: value
  });
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
  mainStore.dispatch({type: UPD_MAIN_STORE, value});
}

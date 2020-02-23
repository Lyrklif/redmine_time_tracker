// Редюсер (reducer) — это чистая функция, которая принимает предыдущее
// состояние и экшен (state и action) и возвращает следующее состояние (новую версию предыдущего).

// import { startingValue } from '../startingValue';

import {
  UPD_TASKS,
  UPD_AUTHORIZED,
  UPD_USER_DATA,
  UPD_APPLICATION_STATUS,
  UPD_STATISTICS,
  UPD_LOGIN,
} from '../variables/actionTypes';

export default (state, action) => {
  switch (action.type) {
    // изменить какой-то из параметров UPD_APPLICATION_STATUS
    case UPD_APPLICATION_STATUS:
      return Object.assign({}, state, {
        application: {
          ...state.application,
          states: {
            ...state.application.states,
            [action.name]: action.value !== undefined ? action.value : !state.application.states[action.name]
          }
        }
      });
    // изменить UPD_TASKS
    case UPD_TASKS:
      return Object.assign({}, state, {
        ...state,
        'tasks': action.value        
      });
    // изменить UPD_LOGIN
    case UPD_LOGIN:
      return Object.assign({}, state, {
        ...state,
        'user': {
          ...state.user,
          userLogin: action.login,
        },
      });
    // изменить UPD_STATISTICS
    case UPD_STATISTICS:
      return Object.assign({}, state, {
        ...state,
        'statistics': {
          ...state.statistics,
          [action.name]: action.value !== undefined ? action.value : 0
        }
      });
    // авторизован ли пользователь
    case UPD_AUTHORIZED:
      return Object.assign({}, state, {
        'authorized': action.authorized !== undefined ? action.authorized : !state.authorized,
      });
    // авторизован ли пользователь
    case UPD_USER_DATA:
      return Object.assign({}, state, {
        ...state,
        'user': {
          userLogin: action.login ? action.login : '',
          api_key: action.key ? action.key : '',
          redmineUrl: action.url ? action.url : '',
        }
      });
    default:
      return state
  }
}
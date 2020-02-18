// Редюсер (reducer) — это чистая функция, которая принимает предыдущее
// состояние и экшен (state и action) и возвращает следующее состояние (новую версию предыдущего).

// import { startingValue } from '../startingValue';

import {
  UPD_MAIN_STORE,
  UPD_TASKS,
  UPD_AUTHORIZED,
  UPD_USER_DATA,
  UPD_APPLICATION_STATUS,
} from '../actions/actionTypes';

export default (state, action) => {
  switch (action.type) {
    // изменить какой-то из параметров UPD_APPLICATION_STATUS
    case UPD_APPLICATION_STATUS:
      return Object.assign({}, state, {
        application: {
          ...state.application,
          states: {
            ...state.application.states,
            [action.name]: action.value ? action.value : !state.application.states[action.name]
          }
        }
      })
    // изменить UPD_TASKS
    case UPD_TASKS:
      return Object.assign({}, state, {
        ...state,
        'tasks': action.value
      })
    // авторизован ли пользователь
    case UPD_AUTHORIZED:
      return Object.assign({}, state, {
        'authorized': action.authorized ? action.authorized : !state.authorized,
      })
    // авторизован ли пользователь
    case UPD_USER_DATA:
      return Object.assign({}, state, {
        ...state,
        'user': {
          userLogin: action.login ? action.login : '',
          api_key: action.key ? action.key : '',
          redmineUrl: action.url ? action.url : '',
        }
      })
    default:
      return state
  }
}
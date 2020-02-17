
// Редюсер (reducer) — это чистая функция, которая принимает предыдущее 
// состояние и экшен (state и action) и возвращает следующее состояние (новую версию предыдущего).

// import { startingValue } from '../startingValue';

import {
  UPD_MAIN_STORE,
  UPD_TEXT,
  UPD_SELECTED_TEXT,
  UPD_TAG_PARAMETERS,
  UPD_TASKS,
  UPD_AUTHORIZED,
  UPD_USER_DATA,
} from '../actions/actionTypes';

export default (state, action) => {
  switch (action.type) {
    // изменить какой-то из параметров
    case UPD_MAIN_STORE:
      return Object.assign({}, state, {
        [action.value.group]: {
          ...state[action.value.group],
          [action.value.name]: action.value.value ? action.value.value : !state.states[action.value.name]
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
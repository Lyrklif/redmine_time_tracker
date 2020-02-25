// Редюсер (reducer) — это чистая функция, которая принимает предыдущее
// состояние и экшен (state и action) и возвращает следующее состояние (новую версию предыдущего).


import {
  UPD_TASKS,
  UPD_AUTHORIZED,
  UPD_USER_DATA,
  UPD_APPLICATION_STATUS,
  UPD_STATISTICS,
  UPD_LOGIN,
  UPD_ACTIVITIES,
  UPD_NOTICE,
  UPD_MODAL,
  UPD_NOT_SAVED_DATA,
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
    // изменить UPD_NOTICE
    case UPD_NOTICE:
      return Object.assign({}, state, {
        ...state,
        'application': {
          ...state.application,
          'notice': {
            show: action.notice.show !== undefined ? action.notice.show : false,
            type: action.notice.type !== undefined ? action.notice.type : state.application.notice.type,
            text: action.notice.text !== undefined ? action.notice.text : state.application.notice.text
          }
        }
      });
    // изменить UPD_MODAL
    case UPD_MODAL:
      return Object.assign({}, state, {
        ...state,
        'application': {
          ...state.application,
          'modal': {
            show: action.modal.show !== undefined ? action.modal.show : false,
            title: action.modal.title !== undefined ? action.modal.title : state.application.modal.title,
            text: action.modal.text !== undefined ? action.modal.text : state.application.modal.text
          }
        }
      });
      // изменить notSavedData
    case UPD_NOT_SAVED_DATA:
      return Object.assign({}, state, {
        ...state,
        'application': {
          ...state.application,
          'notSavedData': action.value !== undefined ? action.value : !state.application.value,
        }
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
    case UPD_ACTIVITIES:
      return Object.assign({}, state, {
        'activities': action.value,
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
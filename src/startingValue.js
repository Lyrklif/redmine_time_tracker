

// Начальные значения
export const startingValue = {
  authorized: false,

  // информация о пользователе
  user: {
    userLogin: '',
    api_key: '',
    redmineUrl: '',
  },

  // задачи
  tasks: {},

  // типы активности
  activities: {},

  // статистика
  statistics: {
    day: 0,
    week: 0,
    month: 0,
  },

  application: {
    notSavedData: false,

    showMobileMenu: false,
    
    modal: {
      show: false,
      title: '',
      text: ''
    },

    notice: {
      show: false,
      type: '',
      text: ''
    }
  },
};
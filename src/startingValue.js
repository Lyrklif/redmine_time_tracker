// import {
//   default_color,
// } from './vars';

// Начальные значения
export const startingValue = {

  authorized: false,

  user: {
    userLogin: '',
    api_key: '',
    redmineUrl: '',
  },

  // задачи
  tasks: {

  },

  application: {
    // состояния элементов
    states: {
      editText: true, // вкл/выкл режим редактирования текста
      colorPicker: false, // показать/скрыть панель выбора цвета
      dialogLink: false, // показать/скрыть панель ввода ссылки
    },

    // просто текст
    text: {
      settingsPanelTitle: 'Настройки',
      saveSuccess: 'Изменения сохранены',
      saveError: 'Произошла ошибка! Изменения не сохранены. Попробуйте ещё раз',
    },

    // текст кнопок
    buttons: {
      redo: 'Повторить',
      close: 'Закрыть',
      send: 'Отправить',
      cancel: 'Отменить',
      save: 'Сохранить',
      apply: 'Применить',
    },

    // текст полей ввода
    inputs: {
      fontSize: 'Размер шрифта',
      lineHeight: 'Межстрочный интервал',
    },
  },


}
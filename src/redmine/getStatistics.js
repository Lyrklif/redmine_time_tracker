import axios from "axios";
import {setStoreTasks} from '../actions/actionCreators';


// получить
//TODO нужно выводить статистику за: день, неделю, месяц
const getStatistics = (url, api) => {
  const date = new Date();

  const _year = date.getFullYear();
  const _month = (date.getMonth() + 1) >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`; // чтобы отчёт начинался с 1, а не с 0
  const _day = date.getDate() >= 0 ? date.getDate() : `0${date.getDate()}`;
  const _weekday = date.getDay() === 0 ? 6 : date.getDay() - 1; // чтобы начинать отсчёт с Пн, а не в Вс
  const _firstDayWeek = (+_day - +_weekday) >= 10 ? +_day - +_weekday : `0${+_day - +_weekday}`;

  const today = `${_year}-${_month}-${_day}`;
  const weekStarted = `${_year}-${_month}-${_firstDayWeek}`;
  const monthStarted = `${_year}-${_month}-01`;

  const commandToday = `from=${today}&to=${today}`;
  const commandWeek = `from=${weekStarted}&to=${today}`;
  const commandMonth = `from=${monthStarted}&to=${today}`;

  console.log('commandToday', commandToday);
  console.log('commandWeek', commandWeek);
  console.log('commandMonth', commandMonth);

  return axios.get(`${url}/time_entries.json?key=${api}&${commandToday}&user_id=me&=hours&limit=100`)
    .then(response => {

      let data = JSON.parse(response.request.response);
      let array = data.time_entries;

      console.log("getStatistics => response \n", array);

      return response;
    })
    .catch(function (error) {
      console.log("getStatistics => error \n", error);
      return error;
    });
}

export default getStatistics;
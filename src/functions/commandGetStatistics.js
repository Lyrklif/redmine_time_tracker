// commandGetStatistics

const date = new Date();

const _year = date.getFullYear();
const _month = (date.getMonth() + 1) >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`; // чтобы отчёт начинался с 1, а не с 0
const _day = date.getDate() >= 0 ? date.getDate() : `0${date.getDate()}`;
const _weekday = date.getDay() === 0 ? 6 : date.getDay() - 1; // чтобы начинать отсчёт с Пн, а не в Вс
const _firstDayWeek = (+_day - +_weekday) >= 10 ? +_day - +_weekday : `0${+_day - +_weekday}`;

const today = `${_year}-${_month}-${_day}`;
const weekStarted = `${_year}-${_month}-${_firstDayWeek}`;
const monthStarted = `${_year}-${_month}-01`;

export const commandGetStatisticsToday = `from=${today}&to=${today}`;
export const commandGetStatisticsWeek = `from=${weekStarted}&to=${today}`;
export const commandGetStatisticsMonth = `from=${monthStarted}&to=${today}`;
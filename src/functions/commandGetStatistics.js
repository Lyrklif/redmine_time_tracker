// commandGetStatistics

const date = new Date();

const _year = date.getFullYear();
const _month = (date.getMonth() + 1) >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`; // чтобы отчёт начинался с 1, а не с 0
const _day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
const _weekday = date.getDay() === 0 ? 6 : date.getDay() - 1; // чтобы начинать отсчёт с Пн, а не в Вс
const _firstDayWeek = (+_day - +_weekday) >= 10 ? +_day - +_weekday : `0${+_day - +_weekday}`;

const today = `${_year}-${_month}-${_day}`;
const weekStarted = `${_year}-${_month}-${_firstDayWeek}`;
// const monthStarted = `${_year}-${_month}-01`;

const getMonthCommands = () => {
  const n1 = 7;
  const n2 = 14;
  const n3 = 21;
  let lastN = '01';

  let monthCommands = [];

  if (_day > n1) {
    let n = n1 < 10 ? `0${n1}` : n1;
    let command = `from=${_year}-${_month}-${lastN}&to=${_year}-${_month}-${n}`;
    lastN = (n1 + 1) < 10 ? `0${n1 + 1}` : n1 + 1;
    monthCommands.push(command);
  }

  if (_day > n2) {
    let n = n2 < 10 ? `0${n2}` : n2;
    let command = `from=${_year}-${_month}-${lastN}&to=${_year}-${_month}-${n}`;
    lastN = (n2 + 1) < 10 ? `0${n2 + 1}` : n2 + 1;
    monthCommands.push(command);
  }

  if (_day > n3) {
    let n = n3 < 10 ? `0${n3}` : n3;
    let command = `from=${_year}-${_month}-${lastN}&to=${_year}-${_month}-${n}`;
    lastN = (n3 + 1) < 10 ? `0${n3 + 1}` : n3 + 1;
    monthCommands.push(command);
  }

  const lastCommandForMonth = `from=${_year}-${_month}-${lastN}&to=${_year}-${_month}-${_day}`;
  monthCommands.push(lastCommandForMonth);

  return monthCommands;
};

// *** export
export const periodToday = `from=${today}&to=${today}`;
export const periodWeek = `from=${weekStarted}&to=${today}`;
export const periodMonth = getMonthCommands();

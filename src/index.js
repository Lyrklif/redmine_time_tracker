import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { startingValue } from './startingValue';

import mainStore from './store/mainStore';
import { Provider } from "react-redux";

import { BrowserRouter } from 'react-router-dom';

// Начальные значения
const data = startingValue;

ReactDOM.render(
  <Provider store={mainStore}>
    <BrowserRouter>
      <App data={data} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


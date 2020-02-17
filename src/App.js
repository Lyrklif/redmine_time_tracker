import React from "react";
import { Button, DatePicker, version, Layout, Input, Form } from "antd";
import "antd/dist/antd.css";
import "./App.css";

import PageHeader from "./components/PageHeader";

import getTasks from './redmine/getTasks';
import { connect } from 'react-redux';
import axios from "axios";

import Login from './pages/Login';
import Home from './pages/Home';

import authorization from './redmine/authorization';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log('***  Начальные данные ***\n', this.props.data);


    const url = localStorage.getItem('url');
    const api = localStorage.getItem('api');

    if (url && api) authorization(url, api);
  }

  render() {
    let authorized = this.props.authorized;

    return (
      <div className="App">

        <PageHeader />

        <Switch>
          <Route exact path='/' render={() => (
            authorized ? (<Home />) : (<Redirect to="/login" />)
          )} />

          <Route exact path='/login' render={() => (
            authorized ? (<Redirect to="/" />) : (<Login />)
          )} />
        </Switch>

      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
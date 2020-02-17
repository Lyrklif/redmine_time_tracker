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


import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.data)
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
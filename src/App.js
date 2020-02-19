import React from "react";

import "./App.css";

import Button from '@material-ui/core/Button';

import PageHeader from "./components/PageHeader";

import getTasks from './redmine/getTasks';
import {connect} from 'react-redux';
import axios from "axios";

import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Statistics from './pages/Statistics';

import Box from '@material-ui/core/Box';

import authorization from './redmine/authorization';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';


import {MuiThemeProvider} from '@material-ui/core/styles';
import MyTheme from './MyTheme';

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
      <MuiThemeProvider theme={MyTheme}>
        <Box className="App">

          <PageHeader/>

          <main className={'main-content'}>
            <Switch>
              <Route exact path='/' render={() => (
                authorized ? (<Tasks/>) : (<Redirect to="/login"/>)
              )}/>

              <Route exact path='/tasks' render={() => (
                authorized ? (<Tasks/>) : (<Redirect to="/login"/>)
              )}/>

              <Route exact path='/statistics' render={() => (
                authorized ? (<Statistics/>) : (<Redirect to="/login"/>)
              )}/>

              <Route exact path='/login' render={() => (
                authorized ? (<Redirect to="/"/>) : (<Login/>)
              )}/>
            </Switch>
          </main>
        </Box>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(App);
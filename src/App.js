import React from "react";

import "./App.css";

import PageHeader from "./components/PageHeader";

import {connect} from 'react-redux';

import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Statistics from './pages/Statistics';

import Box from '@material-ui/core/Box';

import getAuthorization from './redmine/getAuthorization';
import {Redirect, Route, Switch} from 'react-router-dom';


import {MuiThemeProvider} from '@material-ui/core/styles';
import MyTheme from './MyTheme';
import {storeAuthorization} from "./actionCreators/storeAuthorization";


const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
  }
};


const mapDispatchToProps = dispatch => {
  return {
    dispatchAuthorization: (value) => dispatch(storeAuthorization(value)),
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    // console.log('***  Начальные данные ***\n', this.props.data);

    const url = localStorage.getItem('url');
    const api = localStorage.getItem('api');

    //TODO решить что с этим делать
    if (url && api) {
      let value = getAuthorization(url, api);
      this.setAuthorization(value);
    }
  }

  setAuthorization = (response) => {
    response.then(e => {
      if (e) {
        this.props.dispatchAuthorization(true);
      } else {
        alert('Ошибка при авторизации');
      }
    });
  };

  render() {
    let authorized = this.props.authorized;

    return (
      <MuiThemeProvider theme={MyTheme}>
        <Box className="App" bgcolor="primary.main">

          <PageHeader/>

          <Box component={'main'} className={'main-content'}>
            {authorized ?
              //TODO переделать, чтобы каждый раз не показывалась форма авторизации
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
              :
              <Login/>
            }

          </Box>
        </Box>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
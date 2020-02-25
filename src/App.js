import React from "react";

import "./App.css";

import PageHeader from "./components/PageHeader";

import { connect } from 'react-redux';

import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Statistics from './pages/Statistics';

import Box from '@material-ui/core/Box';

import getAuthorization from './redmine/getAuthorization';
import { Redirect, Route, Switch } from 'react-router-dom';


import { MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from './MyTheme';
import { storeAuthorization } from "./actionCreators/storeAuthorization";
import { storeLogin } from "./actionCreators/storeLogin";


import Preloader from '../src/components/Preloader';
import Notice from '../src/components/Notice';


const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
    notSavedData: state.application.notSavedData,
  }
};


const mapDispatchToProps = dispatch => {
  return {
    dispatchAuthorization: (value) => dispatch(storeAuthorization(value)),
    dispatchLogin: (value) => dispatch(storeLogin(value)),
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const url = localStorage.getItem('url');
    const api = localStorage.getItem('api');
    
    if (url && api) {
      let value = getAuthorization("api", url, api);
      this.setAuthorization(value);
    } else {
      this.setState({isLoading: false});
    }

    window.addEventListener("beforeunload", this.handleWindowBeforeUnload);
  };

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleWindowBeforeUnload);
  }

  handleWindowBeforeUnload = (e) => {
    if (this.props.notSavedData) {
      e.preventDefault();
      e.returnValue = true;
    }
  };

  setAuthorization = (response) => {
    response.then(e => {
      if (e) {
        this.props.dispatchAuthorization(true);

        const login = localStorage.getItem('login');
        this.props.dispatchLogin(login);

        this.setState({isLoading: false});
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

          {this.state.isLoading && <Preloader />}          

          {authorized && <PageHeader />}

          <Box component={'main'} className={'main-content'}>
            {authorized ?

              <Switch>
                <Route exact path='/' render={() => (
                  authorized ? (<Tasks />) : (<Redirect to="/login" />)
                )} />

                <Route exact path='/tasks' render={() => (
                  authorized ? (<Tasks />) : (<Redirect to="/login" />)
                )} />

                <Route exact path='/statistics' render={() => (
                  authorized ? (<Statistics />) : (<Redirect to="/login" />)
                )} />

                <Route exact path='/login' render={() => (
                  authorized ? (<Redirect to="/" />) : (<Login />)
                )} />
              </Switch>
              :
              <Login />
            }

          </Box>
        </Box>
        <Notice />
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
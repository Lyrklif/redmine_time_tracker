import React from "react";

import "./App.css";

import PageHeader from "./components/PageHeader";

import { connect } from 'react-redux';

import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Statistics from './pages/Statistics';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import getAuthorization from './redmine/getAuthorization';
import { Redirect, Route, Switch, Prompt, Link } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from './MyTheme';
import { storeAuthorization } from "./actionCreators/storeAuthorization";
import { storeLogin } from "./actionCreators/storeLogin";
import { modal } from './actionCreators/modal';

import Preloader from './components/Preloader';
import Notice from './components/Notice';
import Modal from './components/Modal';
import MobileMenu from './components/MobileMenu';



import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
    dispatchModal: (show, title, text) => dispatch(modal(show, title, text)),
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      showDrawer: false,
    };
  }

  componentDidMount() {
    const url = localStorage.getItem('url');
    const api = localStorage.getItem('api');

    if (url && api) {
      let value = getAuthorization("api", url, api);
      this.setAuthorization(value);
    } else {
      this.setState({ isLoading: false });
    }

    window.addEventListener("beforeunload", this.handleWindowBeforeUnload);
  };

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleWindowBeforeUnload);
  };

  // закрытие/перезагрузка при несохранённых данных
  handleWindowBeforeUnload = (e) => {
    if (this.props.notSavedData) {
      e.preventDefault();
      e.returnValue = true;

      // let title = 'Данные не сохранены';
      // let text = 'Нужно остановить таймер, чтобы отправить данные в Redmine.';
      // this.props.dispatchModal(true, title, text);
    }
  };

  setAuthorization = (response) => {
    response.then(e => {
      if (e) {
        this.props.dispatchAuthorization(true);

        const login = localStorage.getItem('login');
        this.props.dispatchLogin(login);

        this.setState({ isLoading: false });
      } else {
        if (localStorage.getItem('url')) localStorage.removeItem('url');
        if (localStorage.getItem('api')) localStorage.removeItem('api');
        alert('Ошибка при авторизации.  Попробуйте снова');
      }
    });
  };

  toggleDrawer = (side, open) => e => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    this.setState({ showDrawer: open });
  }

  render() {
    let authorized = this.props.authorized;
    const gitHubPagesUrl = 'redmine_time_tracker';

    return (
      <MuiThemeProvider theme={MyTheme}>
        <Box className="App" bgcolor="primary.main">

          {this.state.isLoading && <Preloader />}

          {authorized && <PageHeader />}

          <Box component={'main'} className={'main-content'}>

            {/* TODO выбрать между этими блоками */}
            {authorized ?
              <Switch>
                <Route exact path='/' render={() => (authorized ? (<Tasks />) : (<Redirect to="/login" />))} />
                <Route exact path='/tasks' render={() => (authorized ? (<Tasks />) : (<Redirect to="/login" />))} />
                <Route exact path='/statistics' render={() => (authorized ? (<Statistics />) : (<Redirect to="/login" />))} />
                <Route exact path='/login' render={() => (authorized ? (<Redirect to="/" />) : (<Login />))} />

                {/* Для GitHub Pages*/}
                <Route exact path={`/${gitHubPagesUrl}/`} render={() => (authorized ? (<Tasks />) : (<Redirect to="/login" />))} />
              </Switch>
              :
              <Login />
            }

            {/*{authorized ?*/}
            {/*  <Switch>*/}
            {/*    <Route exact path="/"><Tasks /></Route>*/}
            {/*    <Route exact path="/tasks"><Tasks /></Route>*/}
            {/*    <Route exact path="/statistics"><Statistics /></Route>*/}
            {/*    <Route exact path="/login"><Login /></Route>*/}
            {/*  </Switch>*/}
            {/*  :*/}
            {/*  <Login />*/}
            {/*}*/}

          </Box>
        </Box>


        <Notice />
        <Modal />
        <MobileMenu />
        <Prompt
          when={this.props.notSavedData}
          message={`Данные не сохранены. Нужно остановить таймер, чтобы отправить данные в Redmine.`}
        />


      </MuiThemeProvider >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

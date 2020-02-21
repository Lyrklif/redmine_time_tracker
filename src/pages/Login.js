import React from "react";

import getAuthorization from "../redmine/getAuthorization";
import {connect} from "react-redux";

import * as IconsLib from "@material-ui/icons";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import Box from "@material-ui/core/Box";
import {userInfo} from "../actionCreators/userInfo";
import {storeAuthorization} from "../actionCreators/storeAuthorization";


const mapStateToProps = state => {
  return {
    authorized: state.authorized
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAuthorization: (value) => dispatch(storeAuthorization(value)),
    dispatchUserInfo: (login, key, url) => dispatch(userInfo(login, key, url)),
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      api: "",
    };
  }

  setAuthorization = (response) => {
    response.then(e => {
      if (e) {
        localStorage.setItem('url', this.state.url);
        localStorage.setItem('api', this.state.api);

        let login = e.data.user.login;

        //TODO зписывать в случаевторизации через логин/пароль
        // let apiKey = e.data.user.api_key;

        this.props.dispatchAuthorization(true);
        this.props.dispatchUserInfo(login, this.state.api, this.state.url);
      } else {
        //TODO добавить обработку неверных данных
        alert('Неверные данные');
      }
    });
  };

  updComponent = () => {
    let value = getAuthorization(this.state.url, this.state.api);
    this.setAuthorization(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.updComponent(this.state.url, this.state.api);
  };


  setUrl = e => {
    e.preventDefault();
    let url = e.target.value.trim(); // значение без пробелов

    if (url.endsWith("/")) {
      url = url.substring(0, url.length - 1); // удалить последний символ
    }
    this.setState({url: url});
  };

  setApi = e => {
    e.preventDefault();
    this.setState({
      api: e.target.value.trim()
    });
  };

  render() {
    return (
      <Box
        component={"form"}
        onSubmit={this.handleSubmit}
        className={"login-form"}
        mx="auto"
        display="flex"
        flexDirection="column"
      >
        <TextField
          label="Redmine Url"
          title={"Redmine Url"}
          size="large"
          color="secondary"
          placeholder="http://redmine.url.ru"
          variant="outlined"
          onInput={this.setUrl}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconsLib.Https/>
              </InputAdornment>
            )
          }}
        />

        <TextField
          label="Redmine Api"
          title={"Redmine Api"}
          size="large"
          color="secondary"
          placeholder="api_key"
          variant="outlined"
          onInput={this.setApi}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconsLib.VpnKey/>
              </InputAdornment>
            )
          }}
        />

        <Button
          color="secondary"
          size="large"
          variant="outlined"
          title="Войти"
          type={"submit"}
          disabled={!this.state.url || !this.state.api}
        >
          Войти
        </Button>
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

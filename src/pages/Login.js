import React from "react";

import getAuthorization from "../redmine/getAuthorization";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import { userInfo } from "../actionCreators/userInfo";
import { storeAuthorization } from "../actionCreators/storeAuthorization";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Input from "../components/Input";


const mapStateToProps = state => {
  return {
    authorized: state.authorized
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAuthorization: value => dispatch(storeAuthorization(value)),
    dispatchUserInfo: (login, key, url) => dispatch(userInfo(login, key, url))
  };
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logInByApi: false,
      url: "",
      api: "",
      login: "",
      password: ""
    };
  }

  switchLogInByApi = () => {
    this.setState({ logInByApi: !this.state.logInByApi });

    this.setState({
      api: '',
      login: '',
      password: ''
    });
  };

  setAuthorization = response => {
    response.then(e => {
      if (e) {
        let login = e.data.user.login;
        let apiKey = e.data.user.api_key;

        localStorage.setItem("url", this.state.url);
        localStorage.setItem("api", apiKey);
        localStorage.setItem("login", login);

        this.props.dispatchAuthorization(true);
        //TODO зачем записывать api и url?
        this.props.dispatchUserInfo(login, apiKey, this.state.url);
      } else {
        //TODO добавить обработку неверных данных
        alert("Неверные данные");
      }
    });
  };

  updComponent = () => {
    let value;
    if (this.state.logInByApi) {
      value = getAuthorization('api', this.state.url, this.state.api);
    } else {
      value = getAuthorization('login', this.state.url, this.state.login, this.state.password);
    }

    this.setAuthorization(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.updComponent(this.state.url, this.state.api);
  };

  setUrl = e => {
    let url = e.target.value.trim(); // значение без пробелов
    if (url.endsWith("/")) {
      url = url.substring(0, url.length - 1); // удалить последний символ
    }
    this.setState({ url: url });
  };

  setApi = e => {
    this.setState({ api: e.target.value.trim() });
  };

  setLogin = e => {
    this.setState({ login: e.target.value.trim() });
  };

  setPass = e => {
    this.setState({ password: e.target.value.trim() });
  };

  render() {
    const loginPass = (
      <>
        <Input
          label="Логин"
          placeholder="Логин"
          onInput={this.setLogin}
          icon={"LockOpen"}
        />

        <Input
          label="Пароль"
          placeholder="****"
          type={'password'}
          onInput={this.setPass}
          icon={"VpnKey"}
        />
      </>
    );

    const api = (
      <Input
        label="Redmine Api"
        placeholder="api_key"
        onInput={this.setApi}
        icon={"VpnKey"}
      />
    );

    return (
      <Box
        component={"form"}
        onSubmit={this.handleSubmit}
        className={"login-form"}
        mx="auto"
        display="flex"
        flexDirection="column"
      >
        <Box className="login-form__switch">
        <FormControlLabel
          title="Вход по api"
          label={
            <Typography
              color={this.state.logInByApi ? "secondary" : "textPrimary"}
            >Вход по api</Typography>
          }
          control={
            <Switch
              checked={this.state.logInByApi}
              onChange={this.switchLogInByApi}
              value="logInByApi"
              color="secondary"
            />
          }
        />
        </Box>

        <Input
          label="Redmine Url"
          placeholder="http://redmine.url.ru"
          onInput={this.setUrl}
          icon={"Language"}
        />

        {this.state.logInByApi ? api : loginPass}

        <Button
          color="secondary"
          size="large"
          variant="outlined"
          title="Войти"
          type={"submit"}
          disabled={!this.state.url || (this.state.logInByApi ? !this.state.api : !this.state.login || !this.state.password)}
        >
          Войти
        </Button>
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

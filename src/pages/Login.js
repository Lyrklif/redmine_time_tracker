// login
import React from "react";

import getTasks from "../redmine/getTasks";
import authorization from "../redmine/authorization";
import { connect } from "react-redux";

import * as IconsLib from "@material-ui/icons";

import Chip from "@material-ui/core/Chip";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";

const mapStateToProps = state => {
  return {
    authorized: state.authorized
  };
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      api: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.getIssues();
  };

  getIssues = () => {
    authorization(this.state.url, this.state.api);
  };

  setUrl = e => {
    e.preventDefault();
    let value = e.target.value.trim(); // значение без пробелов

    // если последний символ /
    if (value.endsWith("/")) {
      value = value.substring(0, value.length - 1); // удалить последний символ
    }

    this.setState({ url: value });
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
        bgcolor="primary.main"
        mx="auto"
        display="flex"
        flexDirection="column" 
        borderRadius="borderRadius"
        boxShadow={2}
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
                <IconsLib.Https />
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
                <IconsLib.VpnKey />
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

export default connect(mapStateToProps)(Login);

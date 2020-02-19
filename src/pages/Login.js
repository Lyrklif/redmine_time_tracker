// login
import React from "react";


import getTasks from '../redmine/getTasks';
import authorization from '../redmine/authorization';
import {connect} from 'react-redux';


import * as IconsLib from "@material-ui/icons";

import Chip from '@material-ui/core/Chip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';


const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      api: "",
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.getIssues();
  };

  getIssues = () => {
    authorization(this.state.url, this.state.api);
  }

  setUrl = e => {
    e.preventDefault();
    let value = e.target.value.trim(); // значение без пробелов

    // если последний символ /
    if (value.endsWith('/')) {
      value = value.substring(0, value.length - 1); // удалить последний символ
    }

    this.setState({url: value});
  };

  setApi = e => {
    e.preventDefault();

    this.setState({
      api: e.target.value.trim()
    });
  }

  render() {
    return (
      <Grid container
            justify="center"
            alignItems="center"
            component={'form'}
            onSubmit={this.handleSubmit}
            className="login-form"
      >
        <Grid item xs={10} sm={8} md={6} lg={4} className={'login-form__content'}>
          <TextField
            label="Redmine Url"
            title={"Redmine Url"}
            color="primary"
            size="large"
            placeholder="http://redmine.url.ru"
            // variant="outlined"
            onInput={this.setUrl}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconsLib.Https color="primary"/>
                </InputAdornment>
              ),
            }}
          />
          {/*</Grid>*/}

          {/*<Grid item xs={12} sm={10} md={8} lg={6} xl={4}>*/}
          <TextField
            label="Redmine Api"
            title={"Redmine Api"}
            color="primary"
            size="large"
            placeholder="api_key"
            // variant="outlined"
            onInput={this.setApi}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconsLib.VpnKey color="primary"/>
                </InputAdornment>
              ),
            }}
          />
          {/*</Grid>*/}

          {/*<Grid item xs={12} sm={10} md={8} lg={6} xl={4}>*/}

          <Button
            color="primary"
            size="large"
            variant="contained"
            title="Войти"
            type={"submit"}
            disabled={!this.state.url || !this.state.api}
          >
            Войти
          </Button>
        </Grid>
      </Grid>

    );
  }
}

export default connect(mapStateToProps)(Login);
// login
import React from "react";
import { Button, DatePicker, version, Layout, Input, Form } from "antd";
import "antd/dist/antd.css";

import getTasks from '../redmine/getTasks';
import authorization from '../redmine/authorization';
import { connect } from 'react-redux';



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
    // getTasks(this.state.url, this.state.api);
    authorization(this.state.url, this.state.api);

    // setTimeout(() => {
    //   console.log(this.props);
    // }, 3000);
  }

  setUrl = e => {
    e.preventDefault();

    this.setState({
      url: e.target.value
    });
  };

  setApi = e => {
    e.preventDefault();

    this.setState({
      api: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="auth_url"
          name="url"
          placeholder="url"
          onInput={this.setUrl}
        />

        <br />

        <input
          type="text"
          id="auth_api"
          name="api"
          placeholder="api"
          onInput={this.setApi}
        />

        <br />
        <button>Отправить</button>
      </form>
    );
  }
}

export default connect(mapStateToProps)(Login);
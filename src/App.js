import React from "react";
import { Button, DatePicker, version, Layout, Input, Form } from "antd";
import "antd/dist/antd.css";
import "./App.css";

import PageHeader from "./components/PageHeader";

import axios from "axios";

// const apiUrl = "https://www.redmine.org";
const apiUrl = "redmine.org";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      pass: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.getIssues();
  };

  getIssues = key => {
    var config = { crossdomain: true };
    let doman = "http://localhost:3000/?url=";

    axios
      .get(
        `${doman}http://${this.state.login}:${this.state.pass}@${apiUrl}/issues.xml?assigned_to_id=me`,
        config
        // `${doman}http://${this.state.login}:${this.state.pass}@${apiUrl}/issues.xml`,
        // config
      )
      .then(function(response) {
        console.log("getIssues => response", response);
        console.log("getIssues => headers", response.config.headers);
      })
      .catch(function(error) {
        console.log("getIssues => error", error);
      });

    // вместо логина/пароля можно использовать api ключ
    // axios.get(`https://${login}:${pass}@redmine.org/issues.json?assigned_to_id=me`);

    //   axios.get(`${apiUrl}/issues.json?assigned_to_id=me&limit=100`, {
    //     headers: apiKey
    // })
  };

  setLogin = e => {
    e.preventDefault();

    this.setState({
      login: e.target.value
    });
  };

  setPass = e => {
    e.preventDefault();

    this.setState({
      pass: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <PageHeader />

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="auth_login"
            name="login"
            placeholder="логин"
            onInput={this.setLogin}
          />
          <input
            type="text"
            id="auth_pass"
            name="pass"
            placeholder="пароль"
            onInput={this.setPass}
          />
          <button>Отправить</button>
        </form>

        {/* {vrem} */}
        {/* <Button type="primary">TTT</Button> */}
        {/* <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Подвал сайта. Тут будет важная, но не очень, информация</Footer>
        </Layout> */}
      </div>
    );
  }
}

export default App;

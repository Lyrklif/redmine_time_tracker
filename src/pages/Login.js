// login
import React from "react";
import { Button, DatePicker, version, Layout, Input, Form, Icon, Row, Col, Select } from "antd";
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
    authorization(this.state.url, this.state.api);
  }

  setUrl = e => {
    e.preventDefault();
    let value = e.target.value.trim(); // значение без пробелов

    // если последний символ /
    if (value.endsWith('/')) {
      value = value.substring(0, value.length - 1); // удалить последний символ
    }

    this.setState({ url: value });
  };

  setApi = e => {
    e.preventDefault();

    this.setState({
      api: e.target.value.trim()
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Row >
          <Col xs={{ span: 20, offset: 2 }} md={{ span: 14, offset: 5 }} lg={{ span: 14, offset: 6 }} xl={{ span: 12, offset: 7 }}>
            <Form.Item label="Redmine Url">
              <Input
                prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="large"
                placeholder="http://redmine.url.ru"
                onInput={this.setUrl}
              />
            </Form.Item>

            <Form.Item label="Redmine Api">
              <Input
                prefix={<Icon type="api" style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="large"
                placeholder="api"
                onInput={this.setApi}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                size="large"
                title="Войти"
                htmlType="submit"
                disabled={!this.state.url || !this.state.api}
              >
                Войти
              </Button>
            </Form.Item>
          </Col>

        </Row>

      </Form>
    );
  }
}

export default connect(mapStateToProps)(Login);
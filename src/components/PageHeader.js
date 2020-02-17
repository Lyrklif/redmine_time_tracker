// pageHeader

import React from "react";
import { connect } from 'react-redux';

import { Button, DatePicker, version, Layout, Menu } from "antd";
import "antd/dist/antd.css";


const { Header } = Layout;

const mapStateToProps = (state) => {
  return {
    authorized: !!+state.authorized,
    name: state.user.userLogin,
  }
}

// настройка тегов
class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Задачи</Menu.Item>
          <Menu.Item key="2">Статистика</Menu.Item>
          <Menu.Item key="3">{this.props.name}</Menu.Item>

        </Menu>

      </Header>

    )
  }
}



export default connect(mapStateToProps)(PageHeader);
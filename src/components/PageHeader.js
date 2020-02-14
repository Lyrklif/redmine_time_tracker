// pageHeader

import React from "react";
import { connect } from 'react-redux';

import { Button, DatePicker, version, Layout, } from "antd";
import "antd/dist/antd.css";


const { Header} = Layout;

const mapStateToProps = (state) => {
  return {
    authorized: !!+state.authorized,
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
        header
      </Header>

    )
  }
}



export default connect(mapStateToProps)(PageHeader);
import React from 'react';
import { Button, DatePicker, version, Layout, } from "antd";
import "antd/dist/antd.css";
import './App.css';

import PageHeader from './components/PageHeader';


import axios from "axios";



function App() {
  return (
    <div className="App">
      <PageHeader />
      {/* <Button type="primary">TTT</Button> */}
      {/* <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Подвал сайта. Тут будет важная, но не очень, информация</Footer>
      </Layout> */}
    </div>
  );
}

export default App;

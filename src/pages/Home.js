// home


import React from "react";
import { Button, DatePicker, version, Layout, Input, Form } from "antd";
import "antd/dist/antd.css";

import getTasks from '../redmine/getTasks';

import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    url: state.user.redmineUrl,
    api: state.user.api_key,
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let tasks = this.props.tasks;

    let tasksList = Object.values(tasks).map((elem, index) => {
      return (
        <div key={index}>
          <h3>#{elem.id} {elem.subject}</h3>
          <p>проект: {elem.project.name}</p>
          <p>статус: {elem.status.name}</p>
          <p>приоритет: {elem.priority.name}</p>
          <p>автор: {elem.author.name}</p>
          <p>описание: {elem.description}</p>
          <p>начало: {elem.start_date}</p>
          <p>конец: {elem.due_date}</p>
        </div>
      )
    });

    return (
      <div>
        <h1>HOME</h1>
        {tasksList}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
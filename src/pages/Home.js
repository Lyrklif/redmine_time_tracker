// home


import React from "react";
import { Button, DatePicker, version, Layout, Input, Form, Skeleton, Card } from "antd";
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


    this.state = {
      loading: true,
    };

  }

  render() {
    const { loading } = this.state;
    const { Meta } = Card;

    let tasks = this.props.tasks;

    let tasksList = Object.values(tasks).map((elem, index) => {
      return (
        <div key={index}>
          <Card loading={loading}>
            <Meta
              title={`#${elem.id} ${elem.subject}`}
              description={`${elem.description}`}
            />
            <p>проект: {elem.project.name}</p>
            <p>статус: {elem.status.name}</p>
            <p>приоритет: {elem.priority.name}</p>
            <p>автор: {elem.author.name}</p>
            <p>начало: {elem.start_date}</p>
            <p>конец: {elem.due_date}</p>
          </Card>
        </div>
      )
    });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);

    return (
      <div>
        <h1>HOME</h1>
        {tasksList}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
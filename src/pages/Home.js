// home


import React from "react";
import { Button, DatePicker, version, Layout, Input, Form, Skeleton, Card, Descriptions, Badge, Tag, Empty } from "antd";
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
      loading: false, // должно быть true для показа Skeleton 
    };
  }

  render() {
    const { loading } = this.state;

    let tasks = this.props.tasks;

    let tasksList = Object.values(tasks).map((elem, index) => {
      return (
        <li key={index}>
          <Card loading={loading} >
            <h3>{`#${elem.id} ${elem.subject}`}</h3>
            <Tag
              color={
                (elem.status.id === 1 && "geekblue") ||
                (elem.status.id === 2 && "cyan") ||
                (elem.status.id === 3 && "volcano") ||
                (elem.status.id === 4 && "magenta") ||
                "geekblue"
              }
            >
              {elem.status.name}</Tag>
            <Tag
              color={
                (elem.priority.id === 1 && "magenta") ||
                (elem.priority.id === 2 && "geekblue") ||
                (elem.priority.id === 3 && "lime") ||
                (elem.priority.id === 4 && "cyan") ||
                "geekblue"
              }
            >
              {elem.priority.name}</Tag>

            {elem.project.name &&
              <Tag color="purple">{elem.project.name}</Tag>
            }


            {(elem.start_date && elem.due_date) &&
              <Tag color="cyan">c {elem.start_date} до {elem.due_date}</Tag>
            }

          </Card>
        </li>
      )
    });

    return (
      <div>
        {/* <h1>HOME</h1> */}
        {tasksList ?
          <ul className="clear-list">
            {tasksList}
          </ul>
          :
          <Empty />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
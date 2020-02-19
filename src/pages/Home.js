// home


import React from "react";
import {Button, DatePicker, version, Layout, Input, Form, Skeleton, Card, Descriptions, Badge, Tag, Empty} from "antd";
import "antd/dist/antd.css";

import getTasks from '../redmine/getTasks';

import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    url: state.user.redmineUrl,
    api: state.user.api_key,
    skeleton: state.application.states.skeleton,
  }
}

/**
 *
 */
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      // timer: new Date()
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }


  switchPlay = () => {
    this.setState(state => ({
      play: !this.state.play
    }));
  };


  startTimer = () => {
    this.switchPlay();

    let timer = new Date();

    let hours = timer.getHours();
    let minutes = timer.getMinutes();
    let seconds = timer.getSeconds();

    this.setState(state => ({
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }));
  }

  stopTimer = () => {
    this.switchPlay();
  }

  render() {

    let tasks = this.props.tasks;

    let tasksList = Object.values(tasks).map((elem, index) => {
      return (
        <li key={index}>
          <Card loading={this.props.skeleton}>
            <Button
              shape="circle"
              type={this.state.play ? "danger" : "primary"}
              icon={this.state.play ? "pause" : "caret-right"}
              title={this.state.play ? "Стоп" : "Старт"}
              onClick={this.state.play ? this.stopTimer : this.startTimer}
            />
            <p>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</p>
            <h3>{`#${elem.id} ${elem.subject}`}</h3>
            <Tag
              color={
                (elem.status.id === 1 && "geekblue") ||
                (elem.status.id === 2 && "cyan") ||
                (elem.status.id === 3 && "volcano") ||
                (elem.status.id === 4 && "magenta") ||
                (elem.status.id === 5 && "purple") ||
                (elem.status.id === 6 && "green") ||
                "geekblue"
              }
            >{elem.status.name}</Tag>
            <Tag
              color={
                (elem.priority.id === 1 && "purple") ||
                (elem.priority.id === 2 && "blue") ||
                (elem.priority.id === 3 && "lime") ||
                (elem.priority.id === 4 && "cyan") ||
                (elem.priority.id === 5 && "green") ||
                (elem.priority.id === 6 && "gold") ||
                "geekblue"
              }
            >{elem.priority.name}</Tag>

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
          <Empty/>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
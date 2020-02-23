import React from "react";

import getTasks from '../redmine/getTasks';
import * as IconsLib from "@material-ui/icons";

import { connect } from 'react-redux';
import Task from '../components/Task';

import { tasks } from "../actionCreators/tasks";
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    skeleton: state.application.states.skeleton,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchTasks: (value) => dispatch(tasks(value)),
  }
};

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.showCurrentComponent();
  };

  showCurrentComponent = () => {
    let value = getTasks();
    this.setTasks(value);
  };

  setTasks = (response) => {
    response.then(e => {
      if (e) {
        let tasks = e.data.issues;
        this.props.dispatchTasks(tasks);

        this.setLoaded();
      } else {
        console.log('Ошибка в setTasks. Попробуйте перезагрузить страницу');
      }
    });
  };

  setLoaded = () => {
    this.setState({
      isLoading: false
    });
  };

  render() {
    let tasks = Object.values(this.props.tasks);

    let tasksList = tasks.map((elem, index) => {
      return (
        <li key={index} className={'task'}>
          <Task
            id={elem.id}
            subject={elem.subject}
            priority={elem.priority.name}
            project={elem.project.name}
            status={elem.status.name}
            start_date={elem.start_date}
            due_date={elem.due_date}
            estimated_hours={elem.estimated_hours}
            spent_hours={elem.spent_hours}
          />
        </li>
      )
    });

    let skeleton = (
      <Box
        component={"li"}
        my={3}
      >
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </Box>
    );

    return (
      <ul className="clear-list tasks-list">
        {this.state.isLoading ?
          <>
            {skeleton}
            {skeleton}
            {skeleton}
          </>
          :
          tasksList
        }
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
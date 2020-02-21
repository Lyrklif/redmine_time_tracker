import React from "react";

import getTasks from '../redmine/getTasks';
import * as IconsLib from "@material-ui/icons";

import {connect} from 'react-redux';
import Task from '../components/Task';

import CircularProgress from "@material-ui/core/CircularProgress";
import {tasks} from "../actions/tasks";


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
      isLoading: true,
    };

    this.updComponent = this.updComponent.bind(this); // async, поэтому нужно объявлять так
  }

  componentDidMount() {
    this.updComponent().then(r => this.setLoaded());
  };

  setTasks = (response) => {
    response.then(e => {
      let tasks = e.data.issues;
      this.props.dispatchTasks(tasks);
    });
  };

  async updComponent() {
    let value = getTasks();
    this.setTasks(value);
  }

  //TODO спинер не показывается
  setLoaded = () => {
    this.setState({
      isLoading: false
    });
  };

  render() {
    let tasks = this.props.tasks;

    let tasksList = Object.values(tasks).map((elem, index) => {
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

    return (
      <ul className="clear-list tasks-list">
        {this.state.isLoading ?
          <CircularProgress color="secondary" size={40}/>
          :
          tasksList
        }
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
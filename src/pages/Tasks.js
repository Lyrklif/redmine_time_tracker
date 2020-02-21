
import React from "react";

import getTasks from '../redmine/getTasks';
import * as IconsLib from "@material-ui/icons";

import {connect} from 'react-redux';
import Task from '../components/Task';

/**
 *
 * @param state
 * @returns {{skeleton: boolean, api: string, tasks: {}, url: string}}
 */
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    skeleton: state.application.states.skeleton,
  }
}


class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tasks = this.props.tasks;

    let tasksList = Object.values(tasks).map((elem, index) => {
      console.log(elem);
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
        {tasksList}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(Tasks);
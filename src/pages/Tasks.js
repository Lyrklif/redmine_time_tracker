// home


import React from "react";


import getTasks from '../redmine/getTasks';

import * as IconsLib from "@material-ui/icons";

import Chip from '@material-ui/core/Chip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';


import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
    url: state.user.redmineUrl,
    api: state.user.api_key,
    skeleton: state.application.states.skeleton,
  }
}


class Tasks extends React.Component {
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


  /**
   *
   */
  switchPlay = () => {
    this.setState(state => ({
      play: !this.state.play
    }));
  };


  /**
   *
   */
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

  /**
   *
   */
  stopTimer = () => {
    this.switchPlay();
  }

  /**
   *
   * @returns {*}
   */
  render() {

    let tasks = this.props.tasks;

    /**
     *
     * @type {*[]}
     */
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
          />
        </li>
      )
    });

    return (
      <ul className="clear-list">
        {tasksList}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(Tasks);
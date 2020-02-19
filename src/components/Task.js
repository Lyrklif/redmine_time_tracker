// home


import React from "react";


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


/**
 *
 * @param state
 * @returns {{skeleton: boolean, api: string, tasks: {}, url: string}}
 */
// const mapStateToProps = (state) => {
//   return {
//     tasks: state.tasks,
//     url: state.user.redmineUrl,
//     api: state.user.api_key,
//     skeleton: state.application.states.skeleton,
//   }
// }


class Task extends React.Component {
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
  };

  /**
   *
   */
  stopTimer = () => {
    this.switchPlay();
  };

  /**
   *
   * @returns {*}
   */
  render() {
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            {this.props.id}
          </Typography>
          <Typography variant="h6" gutterBottom component="h3">
            {this.props.subject}
          </Typography>

          {this.props.status && <Chip variant="outlined" color="primary" size="small" label={this.props.status}/>}
          {this.props.priority && <Chip variant="outlined" color="primary" size="small" label={this.props.priority}/>}
          {this.props.project && <Chip variant="outlined" color="primary" size="small" label={this.props.project}/>}
          {(this.props.start_date && this.props.due_date) &&
          <Chip variant="outlined" color="primary" size="small"
                label={`c ${this.props.start_date} до ${this.props.due_date}`}/>
          }
        </CardContent>

        <CardActions>
          <IconButton
            variant="contained"
            color="primary"
            onClick={this.state.play ? this.stopTimer : this.startTimer}
          >
            {this.state.play ? <IconsLib.Pause/> : <IconsLib.PlayArrow/>}
          </IconButton>

          <Typography variant="body1">
            {this.state.hours}:{this.state.minutes}:{this.state.seconds}
          </Typography>
        </CardActions>

      </Card>
    );
  }
}

// export default connect(mapStateToProps)(Task);
export default Task;
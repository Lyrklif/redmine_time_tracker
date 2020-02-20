// home

import React from "react";

import * as IconsLib from "@material-ui/icons";

import Chip from "@material-ui/core/Chip";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import {connect} from "react-redux";

import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";

import {makeStyles} from "@material-ui/core/styles";
import MyTheme from "../MyTheme";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";




import timeEntries from '../redmine/timeEntries';


const redTheme = createMuiTheme(MyTheme.palette.stop);

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.timer = undefined;

    this.state = {
      play: false,
      seconds: 0,
      minutes: 0,
      hours: 0,
      timer: 0,
    };
  }

  switchPlay = (value) => {
    this.setState(state => ({
      play: value ? value : !this.state.play
    }));
  };

  startTimer = () => {
    this.switchPlay(true);
    this.timer = setInterval(this.addSecond, 1000);
  };

  stopTimer = () => {
    this.switchPlay(false);
    clearTimeout(this.timer);

    //TODO отправлять реальные данные
    timeEntries(this.props.id, 0.5, 9, 'test04'); // [id, time, activity, comment]
  };

  addSecond = () => {
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;
    let hours = this.state.hours;

    seconds++;

    if (seconds >= 60) {
      seconds = 0;
      minutes++;

      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    this.setState(state => ({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    }));
  };


  render() {
    return (
      <Box
        bgcolor="primary.light"
        p={2}
        color="text.primary"
        borderRadius="borderRadius"
      >
        <Grid container>
          <Grid item xs={12} sm={9}>
            <Typography color="textSecondary" variant="caption">
              {this.props.id} {this.props.project}
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              component="h3"
              color="text.primary"
            >
              {this.props.subject}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={3}
            alignItems="center"
            justify="flex-end"
          >
            <MuiThemeProvider theme={this.state.play ? redTheme : MyTheme}>
              <Button
                theme={this.state.play ? redTheme : MyTheme}
                variant={"outlined"}
                size="small"
                color={this.state.play ? "secondary" : "secondary"}
                onClick={this.state.play ? this.stopTimer : this.startTimer}
              >
                {this.state.play ? (
                  <IconsLib.Stop color="text.secondary"/>
                ) : (
                  <IconsLib.PlayArrow color="text.secondary"/>
                )}
              </Button>
            </MuiThemeProvider>

            <Box m={1}/>

            <Typography variant="body1">
              {this.state.hours}
              :{this.state.minutes >= 10 ? this.state.minutes : `0${this.state.minutes}`}
              :{this.state.seconds >= 10 ? this.state.seconds : `0${this.state.seconds}`}
            </Typography>
          </Grid>
        </Grid>

      </Box>
    );
  }
}

export default Task;

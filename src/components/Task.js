// home

import React from "react";

import * as IconsLib from "@material-ui/icons";

import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import MyTheme from "../MyTheme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Timer from 'react-compound-timer';

import timeEntries from '../redmine/timeEntries';

const redTheme = createMuiTheme(MyTheme.palette.stop);

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      seconds: 0,
      minutes: 0,
      hours: 0,
      timer: 0,
      activity: Object.keys(this.props.activities)[0],
    };
  }

  changeActivity = (e) => {
    let value = e.target.value;

    this.setState({ activity: value });
  }

  switchPlay = (value) => {
    this.setState(state => ({
      play: value ? value : !this.state.play
    }));
  };

  startTimer = () => {
    this.switchPlay(true);
  };

  stopTimer = (milliseconds) => {
    let hours = (milliseconds / (1000 * 60 * 60)).toFixed(2);

    this.switchPlay(false);
    // timeEntries(this.props.id, hours, 9, 'test05'); // ****** РАБОТАЕТ

    //TODO отправлять comment
    // timeEntries(this.props.id, hours, this.state.activity, 'test05'); // [id, time, activity, comment]
  };

  render() {
    let activityKeys = Object.keys(this.props.activities);
    let activityValues = Object.values(this.props.activities);

    let activities = activityKeys.map((elem, i) => {
      return (
        <MenuItem key={i} value={elem}>{activityValues[i]}</MenuItem>
      );
    });


    return (
      <Box
        bgcolor="primary.light"
        p={2}
        color="primary.contrastText"
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
              color="inherit"
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
            <Timer
              startImmediately={false}
              formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
              onStart={() => this.startTimer()}
            >
              {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
                <>
                  <MuiThemeProvider theme={this.state.play ? redTheme : MyTheme}>
                    <Button
                      theme={this.state.play ? redTheme : MyTheme}
                      variant={"outlined"}
                      size="small"
                      color={this.state.play ? "secondary" : "secondary"}
                      onClick={this.state.play ? () => {
                        {
                          stop();
                          this.stopTimer(getTime());
                          reset();
                        }
                      } : start}
                    >
                      {this.state.play ? (
                        <IconsLib.Stop color="secondary" />
                      ) : (
                          <IconsLib.PlayArrow color="secondary" />
                        )}
                    </Button>
                    <Box m={1} />
                    <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
                  </MuiThemeProvider>
                </>
              )}
            </Timer>

            <Box m={1} />

          </Grid>
        </Grid>

        <Box m={1}>
          План:
          {this.props.estimated_hours ? this.props.estimated_hours : 0}
          =>
          затрекано:
          {this.props.spent_hours ? this.props.spent_hours.toFixed(2) : 0}
        </Box>

        <FormControl >
          <Select
            value={this.state.activity}
            onChange={this.changeActivity}
          >
            {activities}
          </Select>
        </FormControl>

        <Box m={1}>
          <Divider />
        </Box>

        {this.props.priority && (
          <Chip
            variant="outlined"
            size="small"
            label={`${this.props.priority}`}
          />
        )}
        {this.props.start_date && this.props.due_date && (
          <Chip
            variant="outlined"
            size="small"
            label={`c ${this.props.start_date} до ${this.props.due_date}`}
          />
        )}

      </Box>
    );
  }
}

export default Task;



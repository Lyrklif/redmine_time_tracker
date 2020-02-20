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

import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import { makeStyles } from "@material-ui/core/styles";
import MyTheme from "../MyTheme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const redTheme = createMuiTheme(MyTheme.palette.stop);

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      // timer: new Date()
      hours: "0",
      minutes: "00",
      seconds: "00"
    };
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
      seconds: seconds
    }));
  };

  stopTimer = () => {
    this.switchPlay();
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
              {this.props.id} - {this.props.project}
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
                variant="contained"
                size="small"
                color={this.state.play ? "secondary" : "secondary"}
                onClick={this.state.play ? this.stopTimer : this.startTimer}
              >
                {this.state.play ? (
                  <IconsLib.Stop color="text.secondary" />
                ) : (
                  <IconsLib.PlayArrow color="text.secondary" />
                )}
              </Button>
            </MuiThemeProvider>

            <Box m={1}></Box>

            <Typography variant="body1">
              {this.state.hours}:{this.state.minutes}:{this.state.seconds}
            </Typography>
          </Grid>
        </Grid>

        {/* <Box m={1}>
          <Divider />
        </Box> */}

        {/* <Grid container>
          <Grid item xs={12}>
            {this.props.project && (
              <Chip
                variant="outlined"
                size="small"
                label={this.props.project}
              />
            )}
            {this.props.priority && (
              <Chip
                variant="outlined"
                size="small"
                label={this.props.priority}
              />
            )}

            {this.props.start_date && this.props.due_date && (
              <Chip
                variant="outlined"
                size="small"
                label={`c ${this.props.start_date} до ${this.props.due_date}`}
              />
            )}
          </Grid>
        </Grid> */}
      </Box>
    );
  }
}

export default Task;

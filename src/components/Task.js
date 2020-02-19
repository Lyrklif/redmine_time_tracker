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

import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { connect } from "react-redux";

import lime from "@material-ui/core/colors/teal";
import { ThemeProvider } from "@material-ui/styles";

import MyTheme from "../MyTheme";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// const redTheme = createMuiTheme({ palette: { primary: lime } });
const redTheme = createMuiTheme(MyTheme.palette.stop);

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      // timer: new Date()
      hours: 0,
      minutes: 0,
      seconds: 0
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
        <Typography color="textSecondary" variant="caption">
          {this.props.id}
        </Typography>

        <Typography
          variant="body2"
          gutterBottom
          component="h3"
          color="text.primary"
        >
          {this.props.subject}
        </Typography>

        {this.props.project && (
          <Chip
            variant="outlined"
            size="small"
            icon={<IconsLib.LocalOffer />}
            label={this.props.project}
          />
        )}

        {this.props.status && (
          <Chip
            variant="outlined"
            size="small"
            icon={<IconsLib.BusinessCenter />}
            label={this.props.status}
          />
        )}
        {this.props.priority && (
          <Chip
            variant="outlined"
            size="small"
            icon={<IconsLib.PriorityHigh />}
            label={this.props.priority}
          />
        )}

        {this.props.start_date && this.props.due_date && (
          <Chip
            variant="outlined"
            size="small"
            icon={<IconsLib.Today />}
            label={`c ${this.props.start_date} до ${this.props.due_date}`}
          />
        )}

        <MuiThemeProvider theme={this.state.play ? redTheme : MyTheme}>
          <Button
            theme={this.state.play ? redTheme : MyTheme}
            variant="contained"
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

        <Typography variant="body1">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </Typography>
      </Box>
    );
  }
}

export default Task;

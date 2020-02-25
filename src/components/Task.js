import React from "react";
import * as IconsLib from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import MyTheme from "../MyTheme";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import {withStyles} from "@material-ui/core/styles";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


import Timer from 'react-compound-timer';

import timeEntries from '../redmine/timeEntries';

import Notice from '../components/Notice';
import {notice} from "../actionCreators/notice";

import {connect} from "react-redux";


const mapStateToProps = state => {
  return {
    show: state.application.notice.show,
    type: state.application.notice.type,
    text: state.application.notice.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchNotice: (show, type, text) => dispatch(notice(show, type, text)),
  };
};


const redTheme = createMuiTheme(MyTheme.palette.stop);

const useStyles = theme => ({
  root: {
    background: MyTheme.palette.primary.light,
  },
  activity: {
    width: '100%'
  },

});


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
      comment: '',
    };
  }

  changeActivity = (e) => {
    this.setState({activity: e.target.value});
  };

  changeComment = (e) => {
    this.setState({comment: e.target.value});
  };

  switchPlay = (value) => {
    this.setState({play: value ? value : !this.state.play})
  };

  startTimer = () => {
    this.switchPlay(true);
  };

  stopTimer = (milliseconds) => {
    let hours = (milliseconds / (1000 * 60 * 60)).toFixed(2);

    this.switchPlay(false);

    //TODO вкл/выкл отправку времени
    // let entries = timeEntries(this.props.id, hours, this.state.activity, this.state.comment);
    // this.feedback(entries);
  };

  feedback = (response) => {
    response.then(e => {
      if (e) {
        this.props.dispatchNotice(true, 'success', 'Время учтено');
      } else {
        this.props.dispatchNotice(true, 'error', 'Ошибка при отправке данных');
      }
    });
  };


  render() {
    const {classes} = this.props;

    let activityKeys = Object.keys(this.props.activities);
    let activityValues = Object.values(this.props.activities);

    let activities = activityKeys.map((elem, i) => {
      return (
        <MenuItem key={i} value={elem}>{activityValues[i]}</MenuItem>
      );
    });

    return (
      <ExpansionPanel className={classes.root}>

        <ExpansionPanelSummary expandIcon={<IconsLib.ExpandMore/>}>

          <Grid container spacing={2}>

            <Grid item xs={12} sm={8} md={9}>
              <Typography color="textSecondary" variant="caption">
                {this.props.id} {this.props.project}
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                component="h3"
                color="inherit"
              >{this.props.subject}</Typography>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={4}
              md={3}
              className={'timer-wp'}
              alignItems="center"
              justify="space-between">

              <Timer
                startImmediately={false}
                formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
                onStart={() => this.startTimer()}>
                {({start, resume, pause, stop, reset, getTimerState, getTime}) => (
                  <>
                    <MuiThemeProvider theme={this.state.play ? redTheme : MyTheme}>
                      <Button
                        className={'extends-panel__btn'}
                        theme={this.state.play ? redTheme : MyTheme}
                        variant={"outlined"}
                        size="small"
                        color={"secondary"}
                        onClick={this.state.play ?
                          (e) => {
                            e.stopPropagation();
                            stop();
                            this.stopTimer(getTime());
                            reset();
                          }
                          :
                          (e) => {
                            e.stopPropagation();
                            start();
                          }
                        }
                      >
                        {this.state.play ? (
                          <IconsLib.Stop color="secondary"/>
                        ) : (
                          <IconsLib.PlayArrow color="secondary"/>
                        )}
                      </Button>
                      <Box m={1}/>
                      <Timer.Hours/>:<Timer.Minutes/>:<Timer.Seconds/>
                    </MuiThemeProvider>
                  </>
                )}
              </Timer>

            </Grid>
          </Grid>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>

          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <TextField
                variant="outlined"
                multiline
                className={'textarea'}
                fullWidth
                value={this.state.comment}
                onChange={this.changeComment}
                inputProps={{maxLength: 255}}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Box mb={1}>
                <FormControl className={classes.activity}>
                  <Select value={this.state.activity} onChange={this.changeActivity}>
                    {activities}
                  </Select>
                </FormControl>
              </Box>

              {this.props.priority &&
              <Chip variant="outlined" size="small" label={`${this.props.priority}`}/>
              }

              {this.props.estimated_hours &&
              <Chip variant="outlined" size="small" label={`План: ${this.props.estimated_hours}ч`}/>
              }

              {this.props.spent_hours > 0 &&
              <Chip variant="outlined" size="small" label={`Учтено: ${this.props.spent_hours.toFixed(2)}ч`}/>
              }

              {this.props.start_date && this.props.due_date &&
              <Chip variant="outlined" size="small" label={`c ${this.props.start_date} до ${this.props.due_date}`}/>
              }

            </Grid>
          </Grid>


        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Task));



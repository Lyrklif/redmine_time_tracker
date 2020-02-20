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

import PieChart from '../components/PieChart';


import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {connect} from "react-redux";

import getStatistics from "../redmine/getStatistics";
import {
  commandGetStatisticsToday,
  commandGetStatisticsWeek,
  commandGetStatisticsMonth
} from "../functions/commandGetStatistics";
import Grid from "@material-ui/core/Grid";


/**
 *
 * @param state
 * @returns {{week: number, month: number, day: number}}
 */
const mapStateToProps = state => {
  return {
    day: state.statistics.day,
    week: state.statistics.week,
    month: state.statistics.month
  };
};

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    //TODO вместо этого получать все данные при авторизации и записывать в store
    getStatistics("day", commandGetStatisticsToday);
    getStatistics("week", commandGetStatisticsWeek);
    getStatistics("month", commandGetStatisticsMonth);
  }

  render() {
    let dayPercent = (this.props.day * 100 / 8).toFixed(2);
    let weekPercent = (this.props.week * 100 / 40).toFixed(2);
    let monthPercent = (this.props.month * 100 / 160).toFixed(2);

    return (
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} sm={6} md={4}>
          <PieChart
            percent={dayPercent}
            text={'За этот день'}
            hours={this.props.day}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PieChart
            percent={weekPercent}
            text={'За эту неделю'}
            hours={this.props.week}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PieChart
            percent={monthPercent}
            text={'За этот месяц'}
            hours={this.props.month}
          />
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Statistics);

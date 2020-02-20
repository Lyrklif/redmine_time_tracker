// PieChart


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


class PieChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box style={{width: 190, textAlign: 'center'}}>
        <CircularProgressbarWithChildren
          value={this.props.percent}
          // text={`${weekPercent}%`}
          styles={buildStyles({
            textColor: "#F6F6FF",
            pathColor: "#59D366",
            trailColor: "#29333A"
          })}
        >
          <Typography color="textPrimary" variant="caption">
            {this.props.text}
          </Typography>
          <Typography variant="h4" color="textSecondary">
            {this.props.hours}
          </Typography>
        </CircularProgressbarWithChildren>

        <Box m={3}>
          <Typography variant="h6" color="textPrimary">
            {this.props.percent}%
          </Typography>
        </Box>

      </Box>
    );
  }
}

export default PieChart;

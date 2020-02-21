// PieChart


import React from "react";


import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


import CircularProgress from "@material-ui/core/CircularProgress";


class PieChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box style={{width: 190, textAlign: 'center'}}>
        <CircularProgressbarWithChildren
          value={this.props.percent}
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
            {this.props.isLoading ? <CircularProgress color="secondary" size={20}/> : this.props.hours}
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

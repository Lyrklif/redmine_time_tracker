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
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    url: state.user.redmineUrl,
    api: state.user.api_key,
    skeleton: state.application.states.skeleton,
  }
}


class Statistics extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>Statistics</h1>
        <p>TTTTTTTTTT Tegfesfgs sfgs g seg seg se</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Statistics);
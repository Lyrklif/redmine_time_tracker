// pageHeader

import React from "react";
import {connect} from 'react-redux';

import * as IconsLib from "@material-ui/icons";
// let Icon = IconsLib[elem[1]];
// <Icon />

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const mapStateToProps = (state) => {
  return {
    authorized: !!+state.authorized,
    name: state.user.userLogin,
  }
}

function ElevationScroll(props) {
  const {children, window} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// настройка тегов
class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ElevationScroll>
        <AppBar
          component={'header'}
          position="fixed"
          bgcolor="primary.dark"
        >
          <Toolbar>

            <IconButton edge="start" aria-label="menu" color="inherit">
              <MenuIcon/>
            </IconButton>


            <Link to="/tasks" className={"clear-link-style"}>
              <Button color="inherit">
                Задачи
              </Button>
            </Link>

            <Link to="/statistics" className={"clear-link-style"}>
              <Button color="inherit">
                Статистика
              </Button>
            </Link>

            <Typography variant="body2" color="inherit">
              {this.props.name}
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    )
  }
}


export default connect(mapStateToProps)(PageHeader);
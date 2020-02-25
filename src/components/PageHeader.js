// pageHeader

import React from "react";
import { connect } from 'react-redux';

import * as IconsLib from "@material-ui/icons";
// let Icon = IconsLib[elem[1]];
// <Icon />

import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import Box from '@material-ui/core/Box';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { mobileMenu } from "../actionCreators/mobileMenu";

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

const mapDispatchToProps = dispatch => {
  return {
    dispatchMobileMenu: (value) => dispatch(mobileMenu(value)),
  }
};

function ElevationScroll(props) {
  const { children, window } = props;
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

  showMobileMenu = () => {
    this.props.dispatchMobileMenu(true);
  }

  render() {
    return (
      <ElevationScroll>
        <Box
          className={"page-header"}
          component={'header'}
          position="fixed"
          bgcolor="primary.dark"
          color="text.primary"
        >
          <Toolbar >

            <Hidden mdUp>
              <IconButton
                onClick={this.showMobileMenu}
                edge="start"
                aria-label="menu"
                color="inherit">
                <MenuIcon />
              </IconButton>
            </Hidden>

            <Hidden smDown>
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
            </Hidden>

            <Typography variant="body2" color="inherit">
              {this.props.name}
            </Typography>
          </Toolbar>
        </Box>
      </ElevationScroll>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
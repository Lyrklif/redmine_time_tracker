
import React from "react";
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { mobileMenu } from "../actionCreators/mobileMenu";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Redirect, Route, Switch, Prompt, Link } from 'react-router-dom';
import * as IconsLib from "@material-ui/icons";
import { Divider } from "@material-ui/core";

import {gitHubPagesName} from '../variables/path';


const mapStateToProps = (state) => {
  return {
    showMobileMenu: state.application.showMobileMenu,
  }
};


const mapDispatchToProps = dispatch => {
  return {
    dispatchMobileMenu: (value) => dispatch(mobileMenu(value)),
  }
};

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  closeDrawer = () => {
    this.props.dispatchMobileMenu(false);
  }

  render() {
    return (
      <Drawer
        anchor="left"
        open={this.props.showMobileMenu}
        onClose={this.closeDrawer}
      >

        <List>
          <ListItem  >
            <Link to={`/${gitHubPagesName}/tasks`} className={"clear-link-style fullwidth"} >
              <Button color="inherit" fullWidth onClick={this.closeDrawer}>
                Задачи
              </Button>
            </Link>
          </ListItem>

          <ListItem  >
            <Link to={`/${gitHubPagesName}/statistics`} className={"clear-link-style fullwidth"}>
              <Button color="inherit" fullWidth onClick={this.closeDrawer}>
                Статистика
              </Button>
            </Link>
          </ListItem>

        </List>

      </Drawer >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);

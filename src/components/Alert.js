import React from "react";

import { Alert as MaterialAlert } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


import getAuthorization from "../redmine/getAuthorization";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    authorized: state.authorized
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatchAuthorization: value => dispatch(storeAuthorization(value)),
    // dispatchUserInfo: (login, key, url) => dispatch(userInfo(login, key, url))
  };
};



class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  closeAlert = () => {

  }


  render() {
    return (
      <Snackbar
        open={this.props.showAlert}
        autoHideDuration={6000}
        onClose={this.closeAlert}
      >
        <MaterialAlert
          variant="filled"
          severity={this.props.alertType}
          onClose={this.closeAlert}
        >
          {this.props.alertText}
        </MaterialAlert>
      </Snackbar>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);


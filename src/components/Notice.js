import React from "react";

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import {connect} from "react-redux";

import {notice} from '../actionCreators/notice';

const mapStateToProps = state => {
  return {
    show: state.application.notice.show,
    type: state.application.notice.type,
    text: state.application.notice.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchNotice: value => dispatch(notice(value)),
  };
};


class Notice extends React.Component {
  constructor(props) {
    super(props);
  }

  close = () => {
    this.props.dispatchNotice(false);
  };

  render() {
    return (
      <Snackbar
        open={this.props.show}
        autoHideDuration={6000}
        onClose={this.close}
      >
        <Alert
          variant="filled"
          severity={this.props.type}
          onClose={this.close}
        >
          {this.props.text}
        </Alert>
      </Snackbar>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notice);


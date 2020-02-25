import React from "react";

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";

import { modal } from '../actionCreators/modal';

const mapStateToProps = state => {
  return {
    show: state.application.modal.show,
    title: state.application.modal.title,
    text: state.application.modal.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchModal: (show, title, text) => dispatch(modal(show, title, text)),
  };
};


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  close = () => {
    this.props.dispatchModal(false);
  };

  render() {
    return (
      <Dialog
        open={this.props.show}
        onClose={this.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {this.props.title && <DialogTitle>{this.props.title}</DialogTitle>}

        {this.props.text &&
          <DialogContent>
            <DialogContentText >
              {this.props.text}
            </DialogContentText>
          </DialogContent>
        }

        <DialogActions>
          <Button onClick={this.close} color="secondary" autoFocus>
            Закрыть
          </Button>
        </DialogActions>

      </Dialog>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);


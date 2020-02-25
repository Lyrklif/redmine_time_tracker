import React from "react";

import * as IconsLib from "@material-ui/icons";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";




class Input extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const Icon = IconsLib[this.props.icon];

    return (
      <TextField
      label={this.props.label}
      title={this.props.label}
      type={this.props.type ? this.props.type : 'text'}
      color="secondary"
      placeholder={this.props.placeholder}
      variant="outlined"
      onInput={this.props.onInput}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        )
      }}
    />
    );
  }
}

export default Input;



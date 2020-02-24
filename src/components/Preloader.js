// Preloader

import React from "react";


import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";


class Preloader extends React.Component {
  render() {
    return (
      <Box bgcolor="primary.dark" className={'preloader'}>
        <CircularProgress color="secondary" size={100} />
      </Box>
    );
  }
}

export default Preloader;



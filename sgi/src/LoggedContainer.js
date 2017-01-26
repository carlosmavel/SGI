// ./LoggedContainer.js
import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';

import SystemDescription from './SystemDescription';

class LoggedContainer extends Component {
  render(){
    return(
      <Grid >
        {this.props.children}
      </Grid>
    );
  }

}

export default LoggedContainer;
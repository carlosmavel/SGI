import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';

import SystemDescription from './SystemDescription';

class InitialContainer extends Component {
  render(){
    return(
      <Grid >
        <SystemDescription />
        {this.props.children}
      </Grid>
    );
  }

}

export default InitialContainer;

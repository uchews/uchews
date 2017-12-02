import React from 'react';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

// sets styles for material ui components
const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%'
  }
};

const Waiting = ({ submitForm }) => {

  return (
    <div>
      <Paper style={style.paper} zDepth={3}>
        <CircularProgress size={80} thickness={5} />
        <h3>Generating results!</h3>
      </Paper>
    </div>
  )
}

export default Waiting;
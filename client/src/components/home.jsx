import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 300,
  margin: 0,
  textAlign: 'center',
  display: 'inline-block',
};

const Home = ({clickHandle}) => {

  return (
    <div>
      <Paper style={style} zDepth={3}>
      <h1>uChews</h1>
      <RaisedButton onClick={ () => clickHandle('input')} label="Get Started" />
      </Paper>
    </div>
  )
}


export default Home;
import React from 'react';
import Paper from 'material-ui/Paper';
import MapsContainer from './map.jsx'

const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%',
  },
  separater: {
    height: '400px',
  }
};

const Results = ({ results }) => {
  console.log(results);
  return (
    <div>
      <Paper style={style.paper} zDepth={3}>
        <h2>Your Results!</h2>
        <MapsContainer results={results}/>
        <div style={style.separater}></div>  {/* this provides the buffer between the map and the results */}
        <h1>#1</h1>                          {/* otherwise the map will overlap the results */}
        <h2>{results[0][0].name}</h2>
        {results[0][0].formatted_address}

        <h1>#2</h1>
        <h2>{results[1][0].name}</h2>
        {results[1][0].formatted_address}

        <h1>#3</h1>
        <h2>{results[2][0].name}</h2>
        {results[2][0].formatted_address}
      </Paper>
    </div>
  )
}

export default Results;


// div on click
// trigger a function that was passed to the child
// the function will show the info window
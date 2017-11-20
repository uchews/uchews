import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%'
  },
};

const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  }
];

const Results = ({ results }) => {
  console.log(results);
  return (
    <div>
      <Paper style={style.paper} zDepth={3}>
        <h1>#1</h1>
        <img src={results[0][0].icon} />
        <h2>{results[0][0].name}</h2>
        {results[0][0].formatted_address}

        <h1>#2</h1>
        <img src={results[1][0].icon} />
        <h2>{results[1][0].name}</h2>
        {results[1][0].formatted_address}

        <h1>#3</h1>
        <img src={results[2][0].icon} />
        <h2>{results[2][0].name}</h2>
        {results[2][0].formatted_address}
      </Paper>
    </div>
  )
}

export default Results;
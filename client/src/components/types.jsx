import React from 'react';
import Paper from 'material-ui/Paper';
import Check from './checkbox.jsx';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

class Types extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: 0,
      types: ['American', 'Asian', 'Chinese', 'Dessert', 'Greek', 'Hamburgers', 'Healthy', 'Indian',
              'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Pasta', 'Pizza',
              'Salads', 'Sandwiches', 'Seafood', 'Soup', 'Sushi', 'Thai', 'Vegetarian', 'Wings', 'Wraps'],
    };
    this.handleReload = this.handleReload.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
  }
  // TODO:
  // store checked types in corresponding arrays
  // enable get request on button click
    // do props.clickHandle("waiting") in get request function

  handleReload() {
    this.props.clickHandle("waiting");
    this.setState( (oldState) => ({ refresh: oldState.refresh+1 }) );
    this.forceUpdate();
  }

  render() {
    var that = this;

    return (
      <div>
      <Paper style={style.paper} zDepth={3}>
        <h1>Chewser #{this.props.counter}</h1>
        <h2>What are you in the mood for?</h2>
        <div style={style.container}>
          {this.state.types.map(function(type) {
            return <Check name={"wantToEat"}
                          type={type} />
          })}
        </div>
        <h2>Any dealbreakers?</h2>
        <div style={style.container}>
          {this.state.types.map(function(type) {
            return <Check name={"willNotEat"}
                          type={type} />
          })}
        </div>
        <RaisedButton label="Next"
                      primary={true}
                      onClick={this.handleReload} />
      </Paper>
      </div>
    )
  }

}

export default Types;
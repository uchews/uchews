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
    width: '70%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width:'23%',
    height:'130%'
  },
};

class Types extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ['American', 'Asian', 'Chinese', 'Dessert', 'Greek', 'Hamburgers', 'Healthy', 'Indian',
              'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Pasta', 'Pizza',
              'Salads', 'Sandwiches', 'Seafood', 'Soup', 'Sushi', 'Thai', 'Vegetarian', 'Wings', 'Wraps'],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updatePreference(() => {
      this.props.clickHandle('home');
    });
  }

  render() {
    // this doesn't hold its context inside the map function
    var that = this;

    return (
      <div>
      <Paper style={style.paper} zDepth={3}>
        <h1>CHEWSER: #{this.props.counter}</h1>
        <h2>Which cuisine types would you like to eat?</h2>
        {this.props.foodsYum()}
        <div style={style.container}></div>
        <h2>Which cuisine types do you refuse to eat?</h2>

        {this.props.foodsEww()}
        <div style={style.container}></div>

        {/*<div style={style.container}>

        <div style={style.container}>
          {this.state.types.map(function(type) {
            return <Check name={"wantToEat"}
                          type={type}
                          choose={that.props.wantToEat} /> //change so does not get saved after first user
          })}
        </div>
        <h2>Which types do you refuse to eat?</h2>
        <div style={style.container}>
tracing down how to prevent second user on same dvice from saving as first users prefs
          {this.state.types.map(function(type) {
            return <Check name={"willNotEat"}
                          type={type}
                          choose={that.props.willNotEat} />
          })}
        </div>*/}
        <RaisedButton className="submitbutton" label="Next"
                      primary={true}
                      onClick={ () => that.handleClick() } />
      </Paper>
      </div>
    )
  }

}

export default Types;
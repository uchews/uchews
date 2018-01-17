import React from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

// sets styles for material ui components
const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%'
  },
  radio: {
    textAlign: 'left',
    marginLeft: '40%'
  }
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      people: 0,
      distance: 0,
    };
    this.setPeople = this.setPeople.bind(this);
    this.setRadio = this.setRadio.bind(this);
  }

  /*
    Material UI SelectField behaves differently than the other input fields,
    so it needs it own setState function to pass the correct data between components.
    setState is an async function, so a callback is necessary for changeHandle.
  */
  setPeople(e, i, val) {
    this.setState({
      people: val
    }, function() {
      e.target.value = val;
      e.target.name = 'peopleNum';
      this.props.changeHandle(e, i, val);
    });
  }

  setRadio(e, i) {
    e.persist();  // lets us access event properties asynchronously
    let val = e.target.value;
    let key = e.target.name;

    this.setState({
      key: val
    }, function() {
      this.props.changeHandle(e, i, val);
    });
  }

  render() {
    return (
      <div>
       <Paper style={style.paper} zDepth={3}>
        <form>
          <h2>Enter Zip Code!</h2>
          <TextField name="location"
                     hintText="Address or zip code..."
                     errorText={this.props.errorText}
                     onChange={this.props.changeHandle} /><br />

          <h2>Distance?</h2>
          <RadioButtonGroup value={this.state.distance}
                            name="distance"
                            style={style.radio}
                            onChange={this.setRadio}>
            <RadioButton value={1} label="less than 1 mi" />
            <RadioButton value={2} label="up to 2 mi" />
            <RadioButton value={5} label="up to 5 mi" />
            <RadioButton value={10} label="10 mi" />
          </RadioButtonGroup><br />

          <h2>How much do you have?</h2>
          <RadioButtonGroup value={this.state.budget}
                            name="budget"
                            style={style.radio}
                            onChange={this.setRadio}>
            <RadioButton value={1} label="$" />
            <RadioButton value={2} label="$$" />
            <RadioButton value={3} label="$$$" />
            <RadioButton value={4} label="$$$$" />
          </RadioButtonGroup><br />

          <RaisedButton label="Next" primary={true} onClick={() => this.props.clickHandle("waiting")} />

        </form>
      </Paper>
      </div>
    )
  }

}

export default Input;
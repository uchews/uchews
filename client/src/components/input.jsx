import React from 'react';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

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

const Input = (props) => {

  // TODO:
  // change number of choosers to select dropdown
  // Enable required input error handling
  // enable changeHandle on radio buttons

  return (
    <div>
    <Paper style={style.paper} zDepth={3}>
      <form>
        <h2>Location:</h2><TextField name="location"
                                     hintText="Address or zip code..."
                                     errorText="Required"
                                     onChange={props.changeHandle}/><br />
        <h2>Number of Chewsers:</h2><TextField name="peopleNum"
                                               hintText="Number of people"
                                               onChange={props.changeHandle}/><br />
        <h2>Maximum Distance:</h2>
        <RadioButtonGroup name="distance" style={style.radio} required>
          <RadioButton value={1} label="less than 1 mi" />
          <RadioButton value={2} label="up to 2 mi" />
          <RadioButton value={5} label="up to 5 mi" />
          <RadioButton value={10} label="10 mi" />
        </RadioButtonGroup><br />
        <h2>Budget:</h2>
        <RadioButtonGroup name="budget" style={style.radio} required>
          <RadioButton value={1} label="$" />
          <RadioButton value={2} label="$$" />
          <RadioButton value={3} label="$$$" />
          <RadioButton value={4} label="$$$$" />
        </RadioButtonGroup><br />
        <RaisedButton label="Next" primary={true} onClick={() => props.clickHandle("types")} />
      </form>
    </Paper>
    </div>
  )

}

export default Input;
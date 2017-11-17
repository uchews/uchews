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

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: 2
    };
    this.setPeople = this.setPeople.bind(this);
  }
  // TODO:
  // enable changeHandle on radio buttons
  setPeople(e) {
    this.setState({
      people: e.target.innerText
    });
    e.target.value = e.target.innerText;
    e.target.name = 'peopleNum';
    this.props.changeHandle(e);
  }

  render() {
    return (
      <div>
      <Paper style={style.paper} zDepth={3}>
        <form>
          <h2>Location:</h2><TextField name="location"
                                       hintText="Address or zip code..."
                                       errorText={this.props.errorText}
                                       onChange={this.props.changeHandle}/><br />

          <h2>Number of Chewsers:</h2>
          <SelectField
            value={this.state.people}
            maxHeight={200}
            name="peopleNum"
            onChange={this.setPeople}>
            <MenuItem value={2} primaryText="2"/>
            <MenuItem value={3} primaryText="3"/>
            <MenuItem value={4} primaryText="4"/>
            <MenuItem value={5} primaryText="5"/>
            <MenuItem value={6} primaryText="6"/>
            <MenuItem value={7} primaryText="7"/>
            <MenuItem value={8} primaryText="8"/>
            <MenuItem value={9} primaryText="9"/>
            <MenuItem value={10} primaryText="10"/>
          </SelectField><br />

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

          <RaisedButton label="Next" primary={true} onClick={() => this.props.clickHandle("types")} />

        </form>
      </Paper>
      </div>
    )
  }

}

export default Input;
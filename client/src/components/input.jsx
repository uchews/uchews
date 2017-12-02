import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

// sets styles for material ui components
const style = {
  radio: {
    textAlign: 'left',
    marginLeft: '40%'
  }
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
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

        <form>
        <h2>Group Name:</h2>
          <TextField name="title" value={this.state.title} onChange={this.handleInputChange} /><br/>
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
          <RadioButtonGroup value={this.state.distance}
                            name="distance"
                            style={style.radio}
                            onChange={this.setRadio}>
            <RadioButton value={1} label="less than 1 mi" />
            <RadioButton value={2} label="up to 2 mi" />
            <RadioButton value={5} label="up to 5 mi" />
            <RadioButton value={10} label="10 mi" />
          </RadioButtonGroup><br />

          <h2>Budget:</h2>
          <RadioButtonGroup value={this.state.budget}
                            name="budget"
                            style={style.radio}
                            onChange={this.setRadio}>
            <RadioButton value={1} label="$" />
            <RadioButton value={2} label="$$" />
            <RadioButton value={3} label="$$$" />
            <RadioButton value={4} label="$$$$" />
          </RadioButtonGroup><br />

          <RaisedButton label="Get Started!" primary={true} onClick={() => this.props.clickHandle("types")} />

        </form>

      </div>
    )
  }

}

export default Input;
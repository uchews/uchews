import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Input from './input.jsx';

const style = {
  button: {
    margin: '0 25% 27px 25%'
  },
  hungry: {
    margin: '100px 0 20px 0'
  }
};

class NewGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //handle input change of group name
  handleInputChange(event) {
    this.setState({title: event.target.value});
  }

  //pass group title to updeGroup from index, change view to 'input'
  handleClick() {
    let scope = this;
    this.props.updateGroup(scope.state.title, () => {
      console.log('in new group');
      scope.props.clickHandle('input');

    })
  }

  render() {
    return (<div id="makeGroup">
      <h2>Create a new Group!</h2>
      <TextField name="title" value={this.state.title} onChange={this.handleInputChange} /><br/>
      <RaisedButton style={style.button} primary={true} onClick={this.handleClick} label="Get Started!"/>
    </div>)
  }
}

export default NewGroup;
import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Input from './input.jsx';

const style = {
  button: {
    margin: '0 0 100px 0'
  },
  hungry: {
    margin: '100px 0 20px 0'
  }
};

class NewGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location:'',
      errorText: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
    // this.clickHandle = this.clickHandle.bind(this);
    this.errorHandle = this.errorHandle.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  //handle input change of group name
  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  //send post request to server to create or update group (title and location)
  /*** need to send user name to server ***/
  handleClick() {
    var scope = this;
    axios.post('/group', {title: scope.state.title, location:scope.state.location})
    .then((res) => console.log('new group post succeed', res))
    .catch((err) => console.log('new group post error', err));
    // this.props.clickHandle('input');
  }

  //from src index.js
  changeHandle(e, i, val) {
      this.errorHandle(val);
      this.updateState(e, val);
    }

  // handles empty value errors in input.jsx
  errorHandle(val) {
    if (val === '') {
      this.setState({
        errorText: 'Required'
      });
    }
  }

  updateState(e, val) {
    val === undefined ? val = e.target.value : val;  // catch location input field value since it behaves differently
    let key = e.target.name;
    // you must use a function to set state if the key is a variable
    let stateObj = function() {
      var obj = {};
      obj[key] = val;
      return obj;
    }.bind(e)();
    this.setState( stateObj );
  }

  render() {
    return (<div>
      <h2>Group Name:</h2>
          <TextField name="title" value={this.state.title} onChange={this.handleInputChange} /><br/>
      <Input clickHandle={this.clickHandle}
             changeHandle={this.changeHandle}
             errorText={this.state.errorText}/>
    </div>)
  }
}

export default NewGroup;
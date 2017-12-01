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
      location: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    return (<div>
      <form>
        <label>
          <h2>Group Name:</h2>
          <TextField name="title" value={this.state.title} onChange={this.handleInputChange} />
        </label><br/>
      </form>
      <Input />
    </div>)
  }
}

export default NewGroup;
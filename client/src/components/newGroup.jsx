import React from 'react';
import axios from 'axios';

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
}

  render() {
    return (<div>
      <form>
        <label>
          Group Name
          <input name="title" value={this.state.title} onChange={this.handleInputChange} />
        </label><br/>
        <label>
          Location
          <input name="location" placeholder="Address or zip code" onChange={this.handleChange} />
        </label>
      </form>
      <button onClick={this.handleClick}>Submit</button>
    </div>)
  }
}

export default NewGroup;
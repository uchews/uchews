import React from 'react';
import axios from 'axios';

class newTable extends React.Component {
  constructor(props) {
    this.state = {
      tablename: ''
    }
  }

//handle input change of table name
handleChange(event) {
  this.setState({tablename: event.target.value})
}

//send post request to server to create table
/***** need to handle duplicate table name****/
handleClick(event) {
  axios.post('/newTable', {tablename: this.state.tablename})
  .then((res) => console.log('new table post succeed', res))
  .catch((err) => console.log('new table post error', err));
}

  render() {
    return (
      <div>
        <label>
          Enter Table Name
          <input type="text" value={this.state.tablename} onChange={this.handleChange} />
        </label>
        <button onClick={() => this.handleClick(event)}>Submit</button>
      </div>
    )
  }
}
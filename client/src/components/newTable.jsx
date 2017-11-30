import React from 'react';

class newTable extends React.Component {
  constructor(props) {
    this.state = {
      tablename: ''
    }
  }
}

render() {
  return (
    <div>
      <label>
        Enter Table Name
        <input type="text" tablename={this.state.tablename} onChange={this.handleChange} />
      </label>
      <button onClick={this.handleClick}>Submit</button>
    </div>
  )
}
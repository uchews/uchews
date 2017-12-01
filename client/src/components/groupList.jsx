import React from 'react';
import axios from 'axios';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grouplist: []
    }
    this.getList = this.getList.bind(this);
  }

  //send get request
  /*** need to filter out groups involve current user either in frontend or backend***/
  getList() {
    axios.get('/group')
    .then((res) => {
      console.log('group list get request succeed');
      this.setState({grouplist: res})})
    .catch((err) => console.log('group list get request error', err))
  }

  render() {
    return (<div>
      {this.state.grouplist.map((group) => {
        <li>
          Group: {group.title} Location: {group.location}<br/>
          Members: {group.members}
        </li>
      })}
    </div>)
  }
}

export default GroupList;
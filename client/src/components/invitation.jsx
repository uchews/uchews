import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import GroupList from './grouplist.jsx';
import NewGroup from './newGroup.jsx';
import Preference from './preference.jsx';



// sets styles for material ui components
const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    textAlign: 'center',
    width: '50%'
  },
  button: {
    margin: '0 0 100px 0'
  },
  hungry: {
    margin: '100px 0 20px 0'
  }
};

class Invitation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        guest: ''
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.guestEmail = this.guestEmail.bind(this);
  }

  guestEmail(input) {
    // console.log('should be guests email =', input.target.value)
    this.setState({guest: input.target.value});
  }

  sendEmail() {
    //SEND EMAIl
    var input = {
        guest: this.state.guest,
        tableId: 'hackreactor'//this.state.tableId TODO UPDATE to real table ID
    }//TODO update server to handle data passing through
    axios.post('/invitation', input).then(function(success) {
        console.log('sent email: ', success);
    }).catch(function(error) {
        console.log('error email not sent, line 49 invitation.jsx: ', error)
    })


  }


  render() {
    return (
      <div>
        <Paper style={style.paper} zDepth={3}>
          <h1 style={style.hungry}>Invite Guest</h1>
          <input placeholder="Email" onChange={this.guestEmail} />
          <h2 style={style.hungry}>Hungry?</h2>
          <RaisedButton style={style.button} primary={true} onClick={this.sendEmail} label="Invite!" />
        </Paper>
      </div>
    )
  }
}

export default Invitation;
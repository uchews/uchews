import React from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';;




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
    margin: '0 0 20px 0'
  },
  daniel: {
    margin: '20px 0 20px 0'
  },
};

class Invitation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        guest: '',
        group: ' '
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(input) {
    // console.log('should be guests email =', input.target.value)
    this.setState({[input.target.name]: input.target.value});
  }

  sendEmail() {
    //SEND EMAIl
    var input = {
        guest: this.state.guest,
        tableId: this.state.group,
        currentUser: this.props.currentUser
    };
    axios.post('/invitation', input).then(function(success) {
        console.log('sent email: ', success);
    }).catch(function(error) {
        console.log('error email not sent, line 49 invitation.jsx: ', error)
    }).then(this.setState({guest: '', group: ''}));
  }


  render() {
    return (
      <div>
          <h1 style={style.hungry}>Invite Guest</h1>
          <TextField name="guest" hintText="Email" value={this.state.guest} onChange={this.handleChange} /><br/>
          <TextField name="group" hintText="Group" value={this.state.group} onChange={this.handleChange} />
          <h2 style={style.daniel}>Hungry?</h2>
          <RaisedButton style={style.button} primary={true} onClick={this.sendEmail} label="Invite!" />
      </div>
    )
  }
}

export default Invitation;
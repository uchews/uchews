import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';


const style = {
  text: {
    height: '80%',
    width: '80%',
    margin: 40,
    textAlign: 'left',
    display: 'inline-block',
  },
  box: {
    height: '50%',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 250,
    textAlign: 'center',
  },
  button: {
    margin: 10,
  },
  signBar: {

  }
};

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      floatUser: 'username'
    }
    this.onUserChange = this.onUserChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  onUserChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit() {
    axios.post('/signup', {
      username: this.state.username,
      password: this.state.password,
    })
      .then((response) => {
        console.log('successful sign up')
        // if the response is false
          this.setState({
            floatUser: 'username exist try again'
          })
      })
      .catch((err) => {
        console.log('could not reach server')
        this.setState({
            floatUser: 'username exist'
          })
      })
  }

  render() {
    return (
      <div>
        <AppBar
          title="uChews"
        />
          <form>
            <Paper style={style.box}>
            <AppBar
              title="Sign Up"
              showMenuIconButton={false}
              style={style.signBar}
              />
              <div>
                <Paper style={style.text} zDepth={1}>
                    <div>
                      <TextField
                        hintText="username field"
                        floatingLabelText={this.state.floatUser}
                        underlineShow={false}
                        name="username" onChange={this.onUserChange}
                      />
                      <Divider />
                    </div>
                    <div>
                      <TextField
                        hintText="password field"
                        floatingLabelText="password"
                        type="password"
                        underlineShow={false}
                        name="password" onChange={this.onUserChange}
                      />
                      <Divider />
                    </div>
                </Paper>
                    <div>
                      <RaisedButton
                        style={style.button}
                        label="SIGNUP"
                        onClick={this.handleSubmit}
                      />
                      <RaisedButton
                        style={style.button}
                        label="LOGIN"
                        onClick={() => this.props.clickHandle('login')}
                      />
                      <a href="/auth/google">Log In with OAuth Provider</a>
                    </div>
              </div>
            </Paper>
          </form>
      </div>

    )
  }
}

export default Signup;
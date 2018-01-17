import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import $ from 'jquery';

const style = {
  text: {
    height: '80%',
    width: '80%',
    marginTop: 27,
    marginBottom: 11.7,
    textAlign: 'left',
    display: 'inline-block',
  },
  box: {
    height: '50%',
    width: '50%',
    textAlign: 'center',
    display: 'inline-block',
  },
  button: {
    margin: 10,
  }
};

class Login extends React.Component {
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

  componentDidMount() {
    $('body')[0].id = 'login';
  }


  handleSubmit() {
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password,
    })
      .then((response) => {
        this.props.updateUser(this.state.username);
        this.setState({
          username: '',
          password: ''
        })
        console.log(response.data)
        if (response.data === false) {
          this.setState({
            floatUser: 'Incorrect username or password! Please try again!'
          })
        } else {
          $('#login')[0].id = "";
          this.props.clickHandle('home');
        }
      })
      .catch((err) => {
        console.log('could not reach server')
        this.setState({
            floatUser: 'Incorrect username, please try again!'
        })
      })
  }


  render() {
    return (
      <form action="/login" method="post">
        <Paper style={style.box}>
        <AppBar
          title="Log In"
          showMenuIconButton={false}
          />
          <div>
            <Paper style={style.text} zDepth={1}>
                <div>
                  <TextField
                    hintText="username"
                    floatingLabelText={this.state.floatUser}
                    underlineShow={false}
                    onChange={this.onUserChange}
                    value={this.state.username}
                    name="username"
                  />
                  <Divider />
                </div>
                <div>
                  <TextField
                    hintText="password"
                    floatingLabelText="password"
                    type="password"
                    underlineShow={false}
                    onChange={this.onUserChange}
                    name="password"
                    value={this.state.password}
                  />
                  <Divider />
                </div>
            </Paper>
                <div>
                  <RaisedButton
                    primary={true}
                    style={style.button}
                    label="LOGIN"
                    onClick={this.handleSubmit}
                  />
                  <RaisedButton
                    primary={true}
                    style={style.button}
                    label="SIGN IN WITH GOOGLE"
                    href="/auth/google"
                  />
                  <RaisedButton
                    style={style.button}
                    label="SIGNUP"
                    onClick={() => this.props.clickHandle('signup')}
                  />
                </div>
          </div>
        </Paper>
      </form>
    )
  }
}


export default Login;
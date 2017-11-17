import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';

const style = {
  height: 143,
  width: 300,
  margin: 40,
  textAlign: 'center',
  display: 'inline-block',
};

const styleOutside = {
  height: 400,
  width: 700,
  margin: 100,
  textAlign: 'center',
  display: 'inline-block',
}

const button = {
  margin: 10,
};

const Login = ({clickHandle}) => {
  return (
    <form action="/login" method="post">
      <Paper style={styleOutside}>
      <AppBar
        title="Log In"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div>
          <Paper style={style} zDepth={1}>
              <div>
                <TextField
                  hintText="Username Field"
                  floatingLabelText="Username"
                  underlineShow={false}
                />
                <Divider />
              </div>
              <div>
                <TextField
                  hintText="Password Field"
                  floatingLabelText="Password"
                  type="password"
                  underlineShow={false}
                />
                <Divider />
              </div>
          </Paper>
              <div>
                <RaisedButton
                  style={button}
                  label="SIGNUP"
                  onClick={() => clickHandle('login')}
                />
                <RaisedButton
                  style={button}
                  label="LOGIN"
                  onClick={() => clickHandle('home')}
                />
              </div>
        </div>
      </Paper>
    </form>
  )
}

export default Login;
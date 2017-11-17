import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';


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
};


const Signup = ({clickHandle}) => {
  return (
    <div>
      <AppBar
        title="uChews"
      />
        <form action="/signup" method="post">
          <Paper style={style.box}>
          <AppBar
            title="Sign Up"
            showMenuIconButton={false}
            />
            <div>
              <Paper style={style.text} zDepth={1}>
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
                      style={style.button}
                      label="SIGNUP"
                    />
                    <RaisedButton
                      style={style.button}
                      label="LOGIN"
                      onClick={() => clickHandle('login')}
                    />
                  </div>
            </div>
          </Paper>
        </form>
    </div>
  )
}

export default Signup;
import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';


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

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)

  }

  componentDidMount() {
    const context = this;
    axios.get('/checkSession')
      .then((response) => {
        if (!response.data) {
          context.props.clickHandle('signup');
        }
        console.log(response.data)
      })
      .catch((error) => {
        console.log('error inside home')
      })
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  handleLogout() {
    axios.get('/logout')
      .then((response) => {
        console.log('Successfully loggedout')
      })
      .catch((error) => {
        console.log('error logging out')
      })
  }


  render() {
    return (
      <div>
        <AppBar title="uChews"
                onClick={this.handleToggle}/>
        <Drawer docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}>
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Drawer>
        <Paper style={style.paper} zDepth={3}>
          <h2 style={style.hungry}>Hungry?</h2>
          <RaisedButton style={style.button} primary={true} onClick={ () => this.props.clickHandle('input')} label="Get Started!" />
        </Paper>
      </div>
    )
  }
}


export default Home;
import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import GroupList from './grouplist.jsx';
import NewGroup from './newGroup.jsx';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';


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
    super(props);
    this.onFileLoad = this.onFileLoad.bind(this);
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

  handleClose() {
    this.setState({open: false});
  }

  onFileLoad(e, file) {
    console.log(e.target.result, file.name);
  }


  render() {
    return (
      <div>
        <Paper style={style.paper} zDepth={3}>
          <Avatar id="avatar" src="https://avatars1.githubusercontent.com/u/29010046?s=460&v=4"/>
          <h1 style={style.hungry}>Hello {this.props.currentUser}!</h1>
          <h2 style={style.hungry}>Hungry?</h2>
          <RaisedButton style={style.button} primary={true} onClick={ () => this.props.clickHandle('input')} label="Get Started!" />
          <NewGroup />

          <FlatButton label="Choose file" labelPosition="before">
            <input type="file" />
          </FlatButton>
        </Paper>
      </div>
    )
  }
}


export default Home;
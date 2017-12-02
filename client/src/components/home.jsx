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
<<<<<<< HEAD
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
=======
import Invitation from './invitation.jsx';

>>>>>>> added invitation component to home.jsx


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
          <Avatar onClick={ () => this.props.betterUpdateState('image') } size={70} id="avatar" src={this.props.imageUrl}/>
          <h1 style={style.hungry}>Hello {this.props.currentUser}!</h1>
          <h2 style={style.hungry}>Hungry?</h2>
          <RaisedButton style={style.button} primary={true} onClick={ () => this.props.clickHandle('input')} label="Get Started!" />
          <NewGroup />

          <FlatButton label="Choose file" labelPosition="before">
            <input type="file" />
          </FlatButton>
          <Preference prefs={this.props.prefs} />
          <Invitation />
        </Paper>
      </div>
    )
  }
}

export default Home;
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
import EventSearch from './eventSearch.jsx';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

import Invitation from './invitation.jsx';



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
    this.state = {
      grouplist: []
    }
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

    axios.get('/image')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error');
      })

    axios.get('/group')
      .then((res) => context.setState({grouplist: res.data}))
      .catch((err) => console.log('group list get request', err))
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
          <Avatar onClick={ () => this.props.betterUpdateState('image') } size={107} id="avatar" src={this.props.imageUrl}/>
          <h1 style={style.hungry}>Hello {this.props.currentUser}!</h1>
          <h2 style={style.hungry}>Hungry?</h2><br/>
          <NewGroup clickHandle={this.props.clickHandle}
            updateGroup={this.props.updateGroup}/>
          <GroupList grouplist={this.state.grouplist}/>
          <FlatButton label="Choose file" labelPosition="before">
            <input type="file" />
          </FlatButton>
          <Preference prefs={this.props.prefs} />
          <EventSearch />
          <Invitation />
        </Paper>
      </div>
    )
  }
}

export default Home;
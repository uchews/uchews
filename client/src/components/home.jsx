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
import $ from 'jquery';
import Invitation from './invitation.jsx';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Face from 'material-ui/svg-icons/action/face';
import Favorite from 'material-ui/svg-icons/action/favorite';
import SearchBar from 'material-ui-search-bar';
import TextField from 'material-ui/TextField';



// sets styles for material ui components
const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    textAlign: 'center',
    width: '70%'
  },
  button: {
    margin: '0 25% 27px 25%',
    textColor: 'white'
  },
  hungry: {
    margin: '37px 0 20px 0'
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grouplist: [],
      searchGroup: ''
    }
    this.onFileLoad = this.onFileLoad.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.joinGroup = this.joinGroup.bind(this);
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
    // axios.get('/image')
    //   .then((response) => {
    //     context.props.updateImage(response.data);
    //   })
    //   .catch((error) => {
    //     console.log('Error');
    //   })

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

  searchBar() {
    if (this.state.searchBar) {
      return (
        <SearchBar id="searchBar"
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 auto',
          maxWidth: 800
        }}
        />
      )
    }
  }

  toggleSearch() {
    $('#searchGroup').slideToggle('slow', function() {
      console.log('toggling searchGroup');
    })
  }

  toggleMake() {
    $('#makeGroup').slideToggle('slow', function() {
      console.log('toggling makeGroup');
    })
  }

  handleInputChange(event) {
    this.setState({searchGroup: event.target.value})
  }

  // showSearchResult() {
  //   axios.post('/searchGroup', {
  //     title: this.state.searchGroup
  //   })
  //   .then((response) => {
  //     return(
  //       <div>
  //         response.title
  //       </div>
  //     )
  //   }).catch((err) => throw err)
  // }


  joinGroup() {
    var scope = this;
    var data = { title: this.state.searchGroup };
    console.log(this.state.searchGroup);
    axios.post('/searchGroup', data).then((response) => {
      var members = response.data;
      axios.post('/joinGroup', { title: scope.state.searchGroup, members: members }).then((response) => console.log('SUCCESSFULLY JOINED GROUP'))
    })
  }

  render() {
    return (
      <div>
        <Paper style={style.paper} zDepth={3}>
          <Avatar onClick={ () => this.props.betterUpdateState('image') } size={107} id="avatar" src={this.props.imageUrl}/>
          <h1 style={style.hungry}>Hello {this.props.currentUser}!</h1>
          {this.searchBar()}
          <RaisedButton style={style.button} default={true} onClick={() => {this.props.clickHandle('types')}} icon={<ActionAndroid />} label="Update your preferences!"/>
          <RaisedButton icon={<Face/>} style={style.button} default={true} onClick={this.toggleMake} label="Create a Group!"/>
          <NewGroup clickHandle={this.props.clickHandle}
            updateGroup={this.props.updateGroup}/>
          <RaisedButton icon={<Favorite/>} style={style.button} default={true} onClick={this.toggleSearch} label="Join a Group!"/>
          <div id="searchGroup">
            <h2>Let's join an existing group</h2>
            <TextField name="title" value={this.state.searchGroup} onChange={this.handleInputChange} /><br/>
            <RaisedButton style={style.button} primary={true} onClick={this.joinGroup} label="Search Group"/>
          </div>
          <GroupList grouplist={this.state.grouplist}/>
          <Preference prefs={this.props.prefs} />
          <EventSearch />
          <Invitation />
        </Paper>
      </div>
    )
  }
}

export default Home;
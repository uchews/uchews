import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import GroupList from './groupList.jsx';
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
import Loyalty from 'material-ui/svg-icons/action/loyalty';




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
  button1: {
    margin: '17px 0 0 0 '
  },
  hungry: {
    margin: '37px 0 20px 0'
  },
   letterStyle1: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'optima',
  },
  letterStyle2: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'avant guard'
  },
  letterStyle3: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'helvetica'
  },
  letterStyle4: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'futura'
  },
  letterStyle5: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'copperplate'
  }
};



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grouplist: [],
      searchGroup: '',
      state: false
    }
    this.onFileLoad = this.onFileLoad.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.joinGroup = this.joinGroup.bind(this);
    this.getGroup = this.getGroup.bind(this);
    this.toggleGroupList = this.toggleGroupList.bind(this);
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

  getGroup() {
    axios.get('/group')
      .then((res) => this.setState({grouplist: res.data}))
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

  toggleGroupList() {
    $('#grouplist').slideToggle('slow', function() {
      console.log('toggling grouplist');
    })
  }

  handleInputChange(event) {
    this.setState({searchGroup: event.target.value})
  }

  toggleAccount(event) {

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
      axios.post('/joinGroup', { title: scope.state.searchGroup, members: members }).then((response) => {
        this.getGroup();
        this.setState({ searchGroup: '' })
      })
    })
  }

  render() {
    return (
      <div>
        <Paper style={style.paper} zDepth={3}>
          <Avatar onClick={ () => this.props.betterUpdateState('image') } size={107} id="avatar" src={this.props.imageUrl}/>
          <h1 style={style.letterStyle4}>Hello {this.props.currentUser}!</h1>
          {this.searchBar()}
          <RaisedButton style={style.button} default={true} onClick={() => {this.props.clickHandle('types')}} icon={<ActionAndroid />} label="Update your preferences!"/>
          <RaisedButton icon={<Face/>} style={style.button} default={true} onClick={this.toggleMake} label="Create a Group!"/>
          <NewGroup clickHandle={this.props.clickHandle}
            updateGroup={this.props.updateGroup}/>
          <RaisedButton icon={<Favorite/>} style={style.button} default={true} onClick={this.toggleSearch} label="Join a Group!"/>
          <div id="searchGroup">
            <h2 style={style.letterStyle4}>Let's join an existing group</h2>
            <TextField name="title" value={this.state.searchGroup} onChange={this.handleInputChange} /><br/>
            <RaisedButton style={style.button} primary={true} onClick={this.joinGroup} label="Search Group"/>
          </div>
          <div id="blueberries"></div><br />
          {/*<div id="strawberries"></div>
          <div id="oranges"></div>*/}
          <RaisedButton style={style.button1} label="See My Groups" onClick={this.toggleGroupList} labelPosition="after" default={true} icon={<Loyalty />}/>

          <GroupList updateGroup={this.props.updateGroup} submitForm={this.props.submitForm} grouplist={this.state.grouplist}/><br /><br /><br />
          <RaisedButton icon={<Face/>} style={style.button} default={true} onClick={this.toggleAccount} label="My Account"/>


          <Preference prefs={this.props.prefs} />
          <EventSearch />
          <Invitation currentUser={this.props.currentUser} />


        </Paper>
      </div>
    )
  }
}

export default Home;
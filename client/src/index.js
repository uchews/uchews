import React from 'react';
import ReactDOM from 'react-dom';
import {redA200} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Home from './components/home.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import Input from './components/input.jsx';
import Results from './components/results.jsx';
import Types from './components/types.jsx';
import Waiting from './components/wating.jsx';
import Template from './components/template.jsx';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Image from './components/image.jsx'
import axios from 'axios';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#F06292',
    primary2Color: '#AB47BC'
  }
});

const iconStyles = {
  marginRight: 24
}

const style = {
  nav:  {
    // backgroundColor: '#D500F9',
    marginBottom: '1%'
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      currentUser: null,
      //default image
      imageUrl: 'https://pbs.twimg.com/profile_images/839721704163155970/LI_TRk1z_400x400.jpg',
      appView: 'login',
      location: '',
      peopleNum: '',
      distance: '',
      budget: '',
      wantToEat: [],
      willNotEat: [],
      errorText: '',
      counter: 1,
      results: [],
      open: false,
      prefs: {},
      currentGroup: ''
    };
    this.clickHandle = this.clickHandle.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.betterUpdateState = this.betterUpdateState.bind(this);
    this.updateGroup = this.updateGroup.bind(this);
    this.foodsYum = this.foodsYum.bind(this);
    this.foodsEww = this.foodsEww.bind(this);
    this.appBar = this.appBar.bind(this);
    this.drawer = this.drawer.bind(this);
    this.logo = this.logo.bind(this);
    this.header = this.header.bind(this);
    this.addWantToEat = this.addWantToEat.bind(this);
    this.updatePreference = this.updatePreference.bind(this);
    this.addWillNotEat = this.addWillNotEat.bind(this);
    this.submitGroup = this.submitGroup.bind(this);
  }

  componentDidMount() {
    $(document).on('click', '.section-meals img', function(event) {
        event.preventDefault();
        if (event.target.id === "active") {
          console.log(event.target);
          event.target.id = "";
          console.log('set to inactive');
        } else {
          console.log(event.target);
          event.target.id = "active";
          console.log('set to active');
        }
      })
      console.log(this.addWillNotEat);

    // var context = this;
    // axios.get('/image')
    // .then((response) => {
    //   context.updateImage(response.data);
    //   console.log('THIS IS THE RESPONSE DATA', response.data);
    // })
    // .catch((error) => {
    //   console.log('Error');
    // })
  }

  updateUser(username) {
    this.setState({currentUser: username});
  }

  updateImage(imageUrl) {
    this.setState({imageUrl: imageUrl});
  }

  addWantToEat(cuisine) {
    var wantToEat = this.state.wantToEat.slice();
    if (wantToEat.includes(cuisine)) {
      console.log('removing cuisine to wantToEat');
      var index = wantToEat.indexOf(cuisine);
      wantToEat.splice(index, 1);
      this.setState({ wantToEat: wantToEat });
    } else {
      console.log('adding cuisine to wantToEat');
      console.log(this.state.wantToEat);
      this.setState({ wantToEat: this.state.wantToEat.concat(cuisine) });
    }
  }

  addWillNotEat(cuisine) {
    var willNotEat = this.state.willNotEat.slice();
    if (willNotEat.includes(cuisine)) {
      console.log('removing cuisine to willNotEat');
      var index = willNotEat.indexOf(cuisine);
      willNotEat.splice(index, 1);
      this.setState({ willNotEat: willNotEat });
    } else {
      console.log('adding cuisine to willNotEat');
      console.log(this.state.willNotEat);
      this.setState({ willNotEat: this.state.willNotEat.concat(cuisine) });
    }
  }

  updateGroup(title, cb) {
    this.setState({currentGroup: title}, () => {
    // console.log('currentGroup in index', this.state.currentGroup)
    cb();

    });
  }

  foodsYum() {
    var scope = this;
    return (
      <section className="section-meals">
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Korean')}} alt="Korean Bibimbop" value="Korean" src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=2850&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Korean</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Pizza')}} alt="Pizza" value="Pizza" src="https://images.unsplash.com/photo-1507927822105-9a760e57a419?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Pizza</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Sushi')}} alt="Sushi" value="Sushi" src="https://images.unsplash.com/photo-1501735972267-d5c1bc03655c?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Sushi</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Thai')}} alt="Thai" value="Thai" src="https://images.unsplash.com/photo-1441850605338-1b0b5a22e7b9?auto=format&fit=crop&w=2850&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Thai</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Burger')}} alt="Hamburger" value="Burger" src="https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Burger</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Mexican')}} alt="Burrito" value="Mexican" src="https://images.unsplash.com/photo-1464219222984-216ebffaaf85?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Mexican</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Sub')}} alt="Subs" value="Sub" src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Sub</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Chicken')}} alt="Chicken" value="Chicken" src="https://images.unsplash.com/photo-1504670813815-f43e2383e08d?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Chicken</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Chinese')}} alt="Chinese" value="Chinese" src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Chinese</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Brunch')}} alt="Brunch" value="Brunch" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Brunch</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Salad')}} alt="Salad" value="Salad" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1335&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Salad</div>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWantToEat('Pasta')}} alt="Pasta" value="Pasta" src="https://images.unsplash.com/photo-1437526248130-8448edca2e36?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
          <div className="text">Pasta</div>
        </div>
      </section>
    )
  }

  foodsEww() {
    var scope = this;

    return (
      <section className="section-meals">
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Korean')}} alt="Korean Bibimbop" value="Korean" src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=2850&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Pizza')}} alt="Pizza" value="Pizza" src="https://images.unsplash.com/photo-1507927822105-9a760e57a419?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Sushi')}} alt="Sushi" value="Sushi" src="https://images.unsplash.com/photo-1501735972267-d5c1bc03655c?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Thai')}} alt="Thai" value="Thai" src="https://images.unsplash.com/photo-1441850605338-1b0b5a22e7b9?auto=format&fit=crop&w=2850&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Burger')}} alt="Hamburger" value="Burger" src="https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Mexican')}} alt="Burrito" value="Mexican" src="https://images.unsplash.com/photo-1464219222984-216ebffaaf85?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Sub')}} alt="Subs" value="Sub" src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Chicken')}} alt="Chicken" value="Chicken" src="https://images.unsplash.com/photo-1504670813815-f43e2383e08d?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Chinese')}} alt="Chinese" value="Chinese" src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Brunch')}} alt="Brunch" value="Brunch" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=2550&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Salad')}} alt="Salad" value="Salad" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1335&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
        <div className="container">
          <img onClick={(e) => {e.preventDefault(); scope.addWillNotEat('Pasta')}} alt="Pasta" value="Pasta" src="https://images.unsplash.com/photo-1437526248130-8448edca2e36?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
      </section>
    )
  }

  updatePreference(cb) {
    var callback = cb;
    var data = {
      foodType: this.state.wantToEat,
      willNotEat: this.state.willNotEat
    }
    axios.post('/update', data)
    .then( (response) => {
      callback();
      this.setState({ prefs: data }); //made a state to pass to prefs.jsx
    });
  }

  submitGroup() {
    let data = {
      title: this.state.currentGroup,
      location: this.state.location,
      budget: this.state.budget,
      radius: this.state.distance,
      members: [this.state.currentUser],
      wantToEat: [],
      willNotEat:[]
    }

    axios.post('/group', data)
    .then((res) => {
      this.setState({appView:"home"})
    })
  }

  submitForm() {
    let data = {
      title: this.state.currentGroup
      // location: this.state.location,
      // budget: this.state.budget,
      // radius: this.state.distance,
      // wantToEat: this.state.wantToEat,
      // willNotEat: this.state.willNotEat
    };

    console.log('submitting', data);

    axios.post('/input/findRestaurants', data)
    .then( (response) => {
      this.setState({ results: response.data })
    }).then(()=>{this.setState({ appView: 'results'})})
    .catch((err) => console.log('findRestaurants in index', err.config));

    // axios.post('/update', data)
    // .then( (response) => {
    //   this.setState({ prefs: data }); //made a state to pass to prefs.jsx
    // });


    // axios.post('/group', {title: this.state.currentgroup, location: this.state.location, members: this.state.currentUser})
    // .then((res) =>

    // console.log('new group post succeed in index', res))
    // .catch((err) => console.log('new group post error in index', err));

    // // axios.post('/group', {title: this.state.currentGroup, location: this.state.location, members: this.state.currentUser})
    // // .then((res) => console.log('new group post succeed in index', res))
    // // .catch((err) => console.log('new group post error in index', err.config));
  }


  // handles empty value errors in input.jsx
  errorHandle(val) {
    if (val === '') {
      this.setState({
        errorText: 'Required'
      });
    }
  }

  betterUpdateState(value) {
    this.setState({appView: value});
  }

  // catches which input field in input.jsx the user in entering information into,
  // takes the value, updates the corresponding state with that value
  updateState(e, val) {
    val === undefined ? val = e.target.value : val;  // catch location input field value since it behaves differently
    let key = e.target.name;
    // you must use a function to set state if the key is a variable
    let stateObj = function() {
      var obj = {};
      obj[key] = val;
      return obj;
    }.bind(e)();
    this.setState( stateObj );

  }

  // handles button clicks at the bottom of the app as forms are completed and
  // changes the current view
  clickHandle(view) {
    if (view === 'waiting') {
      this.setState({ appView: view }, () => this.submitGroup() );
    } else if (view === 'home') {
      var scope = this;
      axios.get('/image')
      .then((response) => {
        scope.setState({appView: 'home', open: false, imageUrl:response.data});
        console.log('THIS IS THE RESPONSE DATA', response.data);
      })
      .catch((error) => {
        console.log('Error');
      })
    } else {
      this.setState({ appView: view, open: false });
    }
  }

  // handles changes in input fields from input.jsx
  // and routes to handle errors and to constantly update this state
  changeHandle(e, i, val) {
    this.errorHandle(val);
    this.updateState(e, val);
  }

  // handles icon menu drawer visibility
  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleLogout() {
    axios.get('/logout')
      .then((response) => {
        console.log('Successfully loggedout')
        this.clickHandle('login');
        this.setState({ open: false, username: null});
      })
      .catch((error) => {
        console.log('error logging out', error)
      })
  }

  drawer() {
    return (
      <Drawer docked={false} style={style.nav}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                        <MenuItem onClick={() => this.clickHandle('home')}>
                            HOME
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={this.handleLogout}>LOGOUT</MenuItem>
                        <Divider />
                </Drawer>
    )
  }

  header() {
    return(
    <header id="top">
          <nav>
            <div className="row">
            </div>
            {/*<div className="row2"></div>*/}
            {/*<div className="row3"></div>*/}
          </nav>
        </header>
    )
  }

  logo() {
    if (this.state.appView === 'login') {
      return(
        <img id="logo" src="https://i.imgur.com/0Y1WsQI.png">
        </img>
      )
    } else {
      return (
        <img id="logo" src="https://i.imgur.com/0Y1WsQI.png">
        </img>
      )
    }
  }

  appBar() {
    if ( this.state.currentUser ) {
      return(
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar id="appbar" title="" style={style.nav} onLeftIconButtonTouchTap={this.handleToggle}></AppBar>
        </MuiThemeProvider>
      )
    } else {
      return(
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBar id="appbar" title="" style={style.nav} showMenuIconButton={false}></AppBar>
        </MuiThemeProvider>
      )
    }
  }

  render() {
    if (this.state.appView === 'home') {
      return (
          <MuiThemeProvider muiTheme={muiTheme}>
            {this.appBar()}
            {this.drawer()}
            {this.logo()}
            <Home betterUpdateState={this.betterUpdateState}
              imageUrl={this.state.imageUrl}
              currentUser={this.state.currentUser}
              appView={this.state.appView}
              clickHandle={this.clickHandle} prefs={this.state.prefs}
              updateGroup={this.updateGroup} submitForm={this.submitForm}/>
          </MuiThemeProvider>
      )
    } else if (this.state.appView === 'login') {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          {this.appBar()}
          {/*<i className="material-icons" style={iconStyles}>home</i>*/}
          {this.logo()}
          <Login updateUser={this.updateUser} appView={this.state.appView} clickHandle={this.clickHandle}/>
        </MuiThemeProvider>
      )
    } else if (this.state.appView === 'input') {
      return (
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            {this.appBar()}
            {this.drawer()}
            {this.logo()}
            <Input style={style.nav} data={this.state.data}
                   clickHandle={this.clickHandle}
                   changeHandle={this.changeHandle}
                   errorText={this.state.errorText} />
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'types') {
      return (
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            {this.appBar()}
            {this.drawer()}
            {this.logo()}
            <Types style={style.nav} foodsYum={this.foodsYum} updatePreference={this.updatePreference}
                   foodsEww={this.foodsEww}
                   clickHandle={this.clickHandle}
                   counter={this.state.counter}
                   willNotEat={this.state.willNotEat}
                   wantToEat={this.state.wantToEat}/>
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'waiting') {
      return (
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            {this.appBar()}
            {this.drawer()}
            {this.logo()}
            <Waiting submitForm={this.submitForm} />
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'results') {
      return (
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>
            {this.appBar()}
            {this.drawer()}
            {this.logo()}
            <Results clickHandle={this.clickHandle}
                     results={this.state.results} />
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'signup') {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
            {this.appBar()};
            {this.logo()};
          <Signup updateUser={this.updateUser} updateImage={this.updateImage} appView={this.state.appView} clickHandle={this.clickHandle}
                  clickHandle={this.clickHandle}
                  googleClick={this.googleClick}/>
        </MuiThemeProvider>
      )
    } else if (this.state.appView === 'template') {
      return (
        <Template clickHandle={this.clickHandle} />
      )
    } else if (this.state.appView === 'image') {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
            {this.appBar()}
            {this.drawer()}
            {this.logo()}
            <Image currentUser={this.state.currentUser} imageUrl={this.state.imageUrl} clickHandle={this.clickHandle} updateImage={this.updateImage}/>
        </MuiThemeProvider>
      )
    } else if (this.state.appView === 'preference') {
      <MuiThemeProvider muiTheme={muiTheme}>
        {this.appBar()};
        {this.logo()};

      </MuiThemeProvider>
    }
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));
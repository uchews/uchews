import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from './components/home.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import Input from './components/input.jsx';
import Results from './components/results.jsx';
import Types from './components/types.jsx';
import Waiting from './components/wating.jsx';
import Dummy from './components/dummy.jsx';
import axios from 'axios';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      appView: 'home',
      location: '',
      peopleNum: '',
      distance: '',
      budget: '',
      wantToEat: [],
      willNotEat: [],
      errorText: '',
      counter: 1,
      results: [],

    };
    this.clickHandle = this.clickHandle.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
    this.changeView = this.changeView.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    let data = {
      location: this.state.location,
      budget: this.state.budget,
      radius: this.state.distance,
      wantToEat: this.state.wantToEat,
      willNotEat: this.state.willNotEat
    };

    console.log('submitting', data);

    axios.post('/input/findRestaurants', data)
    .then( (response) => {
      this.setState({ results: response.data }, () => this.changeView('results'));
    });
  }

  // handles empty value errors in input.jsx
  errorHandle(val) {
    if (val === '') {
      this.setState({
        errorText: 'Required'
      });
    }
  }

  updateState(e, val) {
    val === undefined ? val = e.target.value : val;  // to catch location value
    let key = e.target.name;
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
    // this if statement handles how many types.jsx forms are loaded based on peopleNum
    if (view === 'waiting') { // if view equals 'waiting', that means a typs.jsx for was just submitted
      if (this.state.counter < this.state.peopleNum) { // check to see if everyone has submitted a form
        let increment = this.state.counter + 1;
        // we have to set the appView to a dummy page briefly, which in turn loads
        // another types page, otherwise the checkboxes won't reset
        this.setState({ counter: increment, appView: 'dummy' });
      } else {
        // when everyone has filled out a types.jsx form, comtinue to the waiting page
        this.setState({ appView: view });
      }
    } else {
      this.setState({ appView: view });
    }
  }

  // handles changes in input fields from input.jsx
  // and routes to handle errors and to update this state
  changeHandle(e, i, val) {
    this.errorHandle(val);
    this.updateState(e, val);
  }

  changeView(view) {
    this.setState({
      appView: view
    })
  }


  render() {
    if (this.state.appView === 'home') {
      return (
        <div>
          <MuiThemeProvider>
            <Home appView={this.state.appView}
                  clickHandle={this.clickHandle}/>
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'login') {
      return (
        <MuiThemeProvider>
          <Login appView={this.state.appView} clickHandle={this.clickHandle}/>
        </MuiThemeProvider>
      )
    } else if (this.state.appView === 'input') {
      return (
        <div>
          <h1>uChews</h1>
          <MuiThemeProvider>
            <Input data={this.state.data}
                   clickHandle={this.clickHandle}
                   changeHandle={this.changeHandle}
                   errorText={this.state.errorText}/>
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'types') {
      return (
        <div>
          <h1>uChews</h1>
          <MuiThemeProvider>
            <Types clickHandle={this.clickHandle}
                   counter={this.state.counter}
                   willNotEat={this.state.willNotEat}
                   wantToEat={this.state.wantToEat}/>
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'waiting') {
      return (
        <div>
          <h1>uChews</h1>
          <MuiThemeProvider>
            <Waiting submitForm={this.submitForm} />
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'results') {
      return (
        <div>
          <h1>uChews</h1>
          <MuiThemeProvider>
            <Results clickHandle={this.clickHandle}
                     results={this.state.results} />
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'signup') {
      return (
        <MuiThemeProvider>
          <Signup appView={this.state.appView} clickHandle={this.clickHandle}
                  changeView={this.changeView}
                  googleClick={this.googleClick}/>
        </MuiThemeProvider>
      )
    } else if (this.state.appView === 'dummy') {
      return (
        <Dummy changeView={this.changeView} />
      )
    }
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));

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

// TODO:
// when a response is received from server
// load results page (this is done either here or in Index)
// HTTP:
// body = { location, budget, radius, wantToEat, willNotEat }

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      appView: 'home',
      location: '',
      peopleNum: '',
      distance: '',
      budget: '',
      types: [],
      errorText: '',
      counter: 1,
    };
    this.clickHandle = this.clickHandle.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
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

  // handles button clicks at the bottom of the app
  // as forms are completed
  clickHandle(view) {
    // this if statement handles how many types forms are loaded based on peopleNum
    if (view === 'waiting') {
      console.log(this.state.peopleNum);
      if (this.state.counter < this.state.peopleNum) {
        let increment = this.state.counter + 1;
        this.setState({ counter: increment });
      } else {
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

  render() {
    if (this.state.appView === 'home') {
      return (
        <div>
          <h1>uChews</h1>
          <MuiThemeProvider>
            <Home appView={this.state.appView} clickHandle={this.clickHandle}/>
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
            <Types appView={this.state.appView}
                   clickHandle={this.clickHandle}
                   counter={this.state.counter}/>
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'waiting') {
      return (
        <div>
          <h1>uChews</h1>
          <MuiThemeProvider>
            <Waiting appView={this.state.appView} clickHandle={this.clickHandle}/>
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'results') {
      return (
        <div>
          <h1>uChews</h1>
          <MuiThemeProvider>
            <Results appView={this.state.appView} clickHandle={this.clickHandle}/>
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'signup') {
      return (
        <MuiThemeProvider>
          <Signup appView={this.state.appView} clickHandle={this.clickHandle}/>
        </MuiThemeProvider>
      )
    }
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));

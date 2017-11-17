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

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      appView: 'home',
      data: {
        location: '',
        peopleNum: '',
        distance: '',
        budget: '',
        types: []
      }
    };
    this.clickHandle = this.clickHandle.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
  }

  clickHandle(view) {
    this.setState({
      appView: view
    });
  }

  changeHandle(e) {
    let stateObj = function() {
      var obj = {};
      obj[e.target.name] = e.target.value;
      return obj;
    }.bind(e)();

    this.setState( stateObj );
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
                   changeHandle={this.changeHandle} />
          </MuiThemeProvider>
        </div>
      )
    } else if (this.state.appView === 'types') {
      return (
        <div>
          <h1>uChews</h1>
          <MuiThemeProvider>
            <Types appView={this.state.appView} clickHandle={this.clickHandle}/>
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

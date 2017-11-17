import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from './components/home.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      appView: 'home'
    };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(view) {
    this.setState({
      appView: view
    });
  }

  render() {
    if (this.state.appView === 'home') {
      return (
        <MuiThemeProvider>
          <Home appView={this.state.appView} clickHandle={this.clickHandle}/>
        </MuiThemeProvider>
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
          <Input appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    } else if (this.state.appView === 'types') {
      return (
        <div>
          <Types appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    } else if (this.state.appView === 'waiting') {
      return (
        <div>
          <Waiting appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    } else if (this.state.appView === 'results') {
      return (
        <div>
          <Results appView={this.state.appView} clickHandle={this.clickHandle}/>
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

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
        <div>
          <h1>uChews</h1>
          <Home appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    } else if (this.state.appView === 'login') {
      return (
        <div>
          <h1>uChews</h1>
          <Login appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    } else if (this.state.appView === 'input') {
      return (
        <div>
          <h1>uChews</h1>
          <Input appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    } else if (this.state.appView === 'types') {
      return (
        <div>
          <h1>uChews</h1>
          <Types appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    } else if (this.state.appView === 'waiting') {
      return (
        <div>
          <h1>uChews</h1>
          <Waiting appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    } else if (this.state.appView === 'results') {
      return (
        <div>
          <h1>uChews</h1>
          <Results appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    } else if (this.state.appView === 'signup') {
      return (
        <div>
          <h1>uChews</h1>
          <Signup appView={this.state.appView} clickHandle={this.clickHandle}/>
        </div>
      )
    }
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));

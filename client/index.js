class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      appView: 'home'
    }
  }
  render() {
    if (this.state.appView === 'home') {
      return (
        <div>
          <h1>uChews</h1>
          <Home appView={this.state.appView}/>
        </div>
      )
    } else if (this.state.appView === 'login') {
      return (
        <div>
          <h1>uChews</h1>
          <Login appView={this.state.appView}/>
        </div>
      );
    } else if (this.state.appView === 'input') {
      return (
        <div>
          <h1>uChews</h1>
          <Input/>
        </div>
      );
    } else if (this.state.appView === 'types') {
      return (
        <div>
          <h1>uChews</h1>
          <Types/>
        </div>
      );
    } else if (this.state.appView === 'waiting') {
      return (
        <div>
          <h1>uChews</h1>
          <Waiting/>
        </div>
      );
    } else if (this.state.appView === 'results') {
      return (
        <div>
          <h1>uChews</h1>
          <Results/>
        </div>
      );
    } else if (this.state.appView === 'signup') {
      return (
        <div>
          <h1>uChews</h1>
          <Signup/>
        </div>
      );
    }
  }
}

ReactDOM.render(<Index/>, document.getElementById('app'));

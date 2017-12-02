import React from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin: '0 0 100px 0'
  },
};

class Preference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefs: {},
      prefsClicked: false
    };
    this.getPrefs = this.getPrefs.bind(this);
  }

  getPrefs() {
    var thisContext = this;
    axios.get('/prefs')
    .then(function(response) {
      console.log('prefs.jsx', response.data)
      thisContext.setState({
        prefsClicked: !thisContext.state.prefsClicked,
        prefs: response.data
      })
    })
  }

  render() {
    if (this.state.prefsClicked) {
      return (
        <div>
          <h2>click for prefs</h2>
          <RaisedButton style={style.button} primary={true} onClick={this.getPrefs} label="Get My Prefs" />
          <br/>
          <h2>Preferences: {this.state.prefs[0].foodType.map(function(item) {
            return (
              <ul>{item}</ul>
            )
          })}</h2>
          <br/>
          <h2>Deal-Breakers: {this.state.prefs[0].willNotEat.map(function(item) {
            return (
              <ul>{item}</ul>
            )
          })}</h2>
        </div>
      )
    } else {
      return (
      <div>
        <h2>click for prefs</h2>
        <RaisedButton style={style.button} primary={true} onClick={this.getPrefs} label="Get My Prefs" />
      </div>
    )
    }
  }
}
export default Preference;
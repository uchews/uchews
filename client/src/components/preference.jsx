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
    this.preferenceList = this.preferenceList.bind(this);
    this.dealbreakerList = this.dealbreakerList.bind(this);
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

  preferenceList() {
    return (
      <div>
        <h1>Preferences</h1>
        {this.state.prefs[0].foodType.map((food) => {
          return (
            <div id="prefer">
              <h4>{food}</h4>
            </div>
          )
        })}
      </div>
    )
  }

  dealbreakerList() {
    return (
      <div>
        <h1>Deal Breakers</h1>
        {this.state.prefs[0].willNotEat.map((food) => {
          return (
            <div id="break">
              <h4>{food}</h4>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    if (this.state.prefsClicked) {
      return (
        <div>
          {this.preferenceList()}
          {this.dealbreakerList()}
          <RaisedButton style={style.button} primary={true} onClick={this.getPrefs} label="Get My Prefs" />
        </div>
      )
    } else {
      return (
      <div>
        <h2>Your taste</h2>
        <RaisedButton style={style.button} primary={true} onClick={this.getPrefs} label="Get My Prefs" />
      </div>
    )
    }
  }
}
export default Preference;
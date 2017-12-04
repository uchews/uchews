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
    var scope = this;
    axios.get('/prefs')
    .then(function(response) {
      console.log('prefs.jsx', response.data)
      scope.setState({
        prefsClicked: !scope.state.prefsClicked,
        prefs: response.data
      })
    })
  }

  preferenceList() {
    return (
      <div>
        <h1 id="preferences">Preferences</h1>
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
        <h1 id="dealbreakers">Deal Breakers</h1>
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

  // togglePreferences() {
  //   $('#showpreferences').slideToggle('slow', function() {
  //     console.log('toggling searchGroup');
  //   })
  // }

  render() {
    if (this.state.prefsClicked) {
      return(
      <div>
        <h2>Your taste</h2>
        <RaisedButton style={style.button} primary={true} onClick={this.getPrefs} label="Get My Prefs" />
        <div id="showpreferences">
          {this.preferenceList()}
          {this.dealbreakerList()}
        </div>
      </div>
    )
    }
    return(
      <div>
        <h2>Your taste</h2>
        <RaisedButton style={style.button} primary={true} onClick={this.getPrefs} label="Get My Prefs" />
      </div>
    )
  }
}
export default Preference;
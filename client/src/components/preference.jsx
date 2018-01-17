import React from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin: '0 0 0 0'
  },
  letterStyle1: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'optima',
  },
  letterStyle2: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'avant guard'
  },
  letterStyle3: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'helvetica'
  },
  letterStyle4: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'futura'
  },
  letterStyle5: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'copperplate'
  }
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
      <div id="div">
        <h1 id="preferences" style={style.letterStyle4}>Preferences</h1>
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
      <div id="div">
        <h1 id="dealbreakers" style={style.letterStyle5}>Deal Breakers</h1>
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
        <h2 style={style.letterStyle4}>See Your Preferences:</h2>
        <RaisedButton style={style.button} primary={true} onClick={this.getPrefs} label="Show My Preferences" />
        <div id="showpreferences">
          {this.preferenceList()}
          {this.dealbreakerList()}
        </div>
      </div>
    )
    }
    return(
      <div>
        <h2 style={style.letterStyle4}>Your Preferences:</h2>
        <RaisedButton style={style.button} primary={true} onClick={this.getPrefs} label="Get My Preferences" />
      </div>
    )
  }
}
export default Preference;
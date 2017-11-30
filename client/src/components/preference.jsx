import React from 'react';

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
    $.ajax({
      type: 'GET',
      url: '/prefs', //***NEEDS TO BE SET
      success: function(data) {
        console.log('GET success prefs.jsx line 18', data)
        thisContext.setState({prefs: data})
      },
      error: function(err) {
        console.log('error line 22 GET prefs.jsx', err)
      }
    }).then(function() { //alternates to show or not show prefs
      thisContext.setState({prefsClicked: !thisContext.state.prefsClicked})
      console.log('Prefs GET success preference.jsx line 27')
    })
  }
//If this breaks it is line 37 map. waiting for data
  render() {
    if (this.state.prefsClicked) {
      return (
        <div>
          <button value:"Preferences" onClick={this.getPrefs}>Preferences</button>
          <br/>
          {this.state.prefs.map(function(item) {
            return (
              <ul>item</ul>
            )
          })}
        </div>
      )
    } else {
      return (
      <div>
        <button value:"Preferences" onClick={this.getPrefs}>Preferences</button>
      </div>
    )
    }

  }
}
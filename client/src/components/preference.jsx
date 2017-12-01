import React from 'react';
import axios from 'axios';

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
      console.log('RESPONSE GET line 18 prefs.jsx', response.data)

      thisContext.setState({
        prefsClicked: !thisContext.state.prefsClicked,
        prefs: response.data
      })
    })

    // console.log('prefs props ==', this.props.prefs)
  }
//If this breaks it is line 37 map. waiting for data
// {this.state.prefs.map(function(item) {
//             return (
//               <ul>item</ul>
//             )
//           })}


//TEMP deleted from deal breakers {this.state.prefs}
  render() {
    if (this.state.prefsClicked) {
      return (
        <div>
          <h2>click for prefs</h2>
          <button onClick={this.getPrefs}></button>
          <br/>
          <h2>Preferences: {this.state.prefs[0].foodType.map(function(item) {
            return (
              <ul>{item}</ul>
            )
          })}</h2>
          <br/>
          <h2>Deal Breakers: {this.state.prefs[0].willNotEat.map(function(item) {
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
        <button onClick={this.getPrefs}></button>
      </div>
    )
    }

  }
}
export default Preference;
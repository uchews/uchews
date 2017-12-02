import React from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
// import Client from 'predicthq'


const style = {
  button: {
    margin: '0 0 100px 0'
  },
};

class EventSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefs: {},
      clicked: false,
      query: '',
      zip: '',

    };
    this.postEvents = this.postEvents.bind(this);
  }

//EVENTS API ATTEMPT
  postEvents() {
    var thisContext = this;
    axios.post('/events', {
      query: 'jazz',
      zip: '72201',


    })
    .then(function(response) {
      console.log('RESPONSE GET line 38 prefs.jsx', response.data)

      // thisContext.setState({
      //   Clicked: !thisContext.state.Clicked,
      //   prefs: response.data
      // })
    })
  }

  render() {
    if (this.state.Clicked) {
      return (
        <div>
          <h2>click for prefs</h2>
          <RaisedButton style={style.button} primary={true} onClick={this.postEvents} label="Get My Prefs" />
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
        <RaisedButton style={style.button} primary={true} onClick={this.postEvents} label="Get My Prefs" />
      </div>
    )
    }

  }
}
export default EventSearch;
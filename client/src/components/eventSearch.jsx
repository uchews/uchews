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
    this.entryZip = this.entryZip.bind(this);
    this.entryQuery = this.entryQuery.bind(this);


  }

//EVENTS API ATTEMPT
  postEvents() {
    var thisContext = this;
    axios.post('/events', {
      query: this.state.query,
      zip: this.state.zip,


    })
    .then(function(response) {
      console.log('RESPONSE GET line 38 prefs.jsx', response.data)

      // thisContext.setState({
      //   Clicked: !thisContext.state.Clicked,
      //   prefs: response.data
      // })
    })
  }

  entryZip(input) {
    this.setState({zip: input.target.value})
  }
  entryQuery(input) {
    this.setState({query: input.target.value})
  }

  render() {
      return (
        <div>

          <label>Zip</label>
          <input placeholder="Zip" onChange={this.entryZip} />
          <label>Type of Events Nearby</label>
          <input placeholder="Type of Event" onChange={this.entryQuery} />

          <h2>Find Nearby Events</h2>
          <RaisedButton style={style.button} primary={true} onClick={this.postEvents} label="Events" />
          <br/>
        </div>
      )

  }
}
export default EventSearch;
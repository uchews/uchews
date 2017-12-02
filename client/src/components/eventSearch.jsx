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
      events: {},
      clicked: false,
      query: '',
      zip: '',
      titles: [],
      descriptions: {}

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
      console.log('RESPONSE.data GET line 38 eventSearch.jsx', response.data)

      var titles = response.data.map(function(item) {
        return item.title;
      })
      titles = titles.slice(0,3);
      var descriptions = response.data.map(function(item) {
        return item.description;
      })
// console.log('title----------title', titles)
      thisContext.setState({
        clicked: !thisContext.state.clicked,
        events: response.data,
        titles: titles,
        descriptions: descriptions
      })
    })
  }

  entryZip(input) {
    this.setState({zip: input.target.value})
  }
  entryQuery(input) {
    this.setState({query: input.target.value})
  }

  render() {
    if (this.state.clicked) {
      return (
        <div>
          <h2>Nearby Events:</h2>
          <h3>{this.state.titles.map(function(item) {
            return (
              <li>
                <a href={'https://www.google.com/search?q='+item} target="_blank">{item}</a>
              </li>
            )
          })}</h3>
          <br/>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Find Nearby Events</h2>
          <label>Zip</label>
          <input placeholder="Zip" onChange={this.entryZip} />
          <label>Type of Events Nearby</label>
          <input placeholder="Type of Event" onChange={this.entryQuery} />
          <RaisedButton style={style.button} primary={true} onClick={this.postEvents} label="Show Events" />
          <br/>
        </div>
      )
    }
  }
}
export default EventSearch;
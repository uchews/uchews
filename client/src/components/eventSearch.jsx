import React from 'react';
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {pinkA200, transparent} from 'material-ui/styles/colors';
// import Client from 'predicthq'


const style = {
  button: {
    margin: '27.7px 0 47px 0'
  },
  hungry: {
    margin: '57px 0 0 0',
    fontFamily: 'futura'
  },
  letterStyle4: {
    margin: '37px 0 20px 0',
    textAlign: 'center',
    fontFamily: 'futura'
  }
}

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
      zip: this.state.zip
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
        <div id="findnearbyevents">
          <h2>Nearby Events</h2>
          <List>{this.state.titles.map(function(item) {
            return (
              <ListItem className="event" primaryText={item}
              leftIcon={<ActionGrade color={pinkA200} />}
              rightIcon={<ActionGrade color={pinkA200} />}
              href={'https://www.google.com/search?q='+item}
              target="_blank"/>
            )
          })}</List>
        </div>
      )
    } else {
      return (
        <div id="findnearbyevents">
          <h1 style={style.letterStyle4}>Find Nearby Events</h1>
          <TextField name="zip" hintText="Zip" value={this.state.zip} onChange={this.entryZip} /><br/>
          <TextField name="query" hintText="Type of Event" value={this.state.query} onChange={this.entryQuery} /><br/>
          <RaisedButton style={style.button} primary={true} onClick={this.postEvents} label="Show Events" />
        </div>
      )
    }
  }
}
export default EventSearch;
// <a href={'https://www.google.com/search?q='+item} target="_blank">{item}</a>
// <input placeholder="Zip" onChange={this.entryZip} />
// <label>Type of Events Nearby</label>
          // <input placeholder="Type of Event" onChange={this.entryQuery} />
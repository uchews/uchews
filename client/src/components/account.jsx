import React from 'react';
import Preference from 'preference.jsx';
import EventSearch from 'eventSearch.jsx';
import Invitation from 'invitation.jsx';

const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%'
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


    render {
      return (
        <div>
          <Paper style={style.paper} zDepth={3}>
          <Preference prefs={this.props.prefs} />
          <EventSearch />
          <Invitation currentUser={this.props.currentUser} />
          </Paper>
        </div>
        )
    }
}
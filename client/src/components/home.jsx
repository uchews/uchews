import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';


// sets styles for material ui components
const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    textAlign: 'center',
    width: '50%'
  },
  button: {
    margin: '0 0 100px 0'
  },
  hungry: {
    margin: '100px 0 20px 0'
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios.get('/checkSession')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log('error inside home')
      })
  }

  render() {
    return (
      <div>
        <Paper style={style.paper} zDepth={3}>
          <h2 style={style.hungry}>Hungry?</h2>
          <RaisedButton style={style.button} primary={true} onClick={ () => this.props.clickHandle('input')} label="Get Started!" />
        </Paper>
      </div>
    )
  }
}


export default Home;
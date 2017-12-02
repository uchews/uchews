import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';



const style = {
  text: {
    height: '80%',
    width: '80%',
    margin: 40,
    textAlign: 'left',
    display: 'inline-block',
  },
  box: {
    height: '50%',
    width: '50%',
    textAlign: 'center',
    display: 'inline-block',
  },
  button: {
    margin: 10,
  }
};


class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onURLChange(e) {
    this.setState({
      image: e.target.value,
    })
  }

  handleSubmit() {
    this.props.updateImage(this.state.image);
    this.props.clickHandle('home');
  }

  render() {
    return (
      <form action="/image" method="post">
        <Paper style={style.box}>
        <AppBar
          title="Change your Image URL"
          showMenuIconButton={false}
          />
          <Avatar id="avatar" src={this.props.imageUrl}/>
          <div>
            <Paper style={style.text} zDepth={1}>
                <div>
                  <TextField
                    hintText="Image URL field"
                    floatingLabelText={this.state.floatUser}
                    underlineShow={false}
                    onChange={this.onURLChange}
                    value={this.state.image}
                    name="image"
                  />
                  <Divider />
                </div>
            </Paper>
                <div>
                  <RaisedButton
                    primary={true}
                    style={style.button}
                    label="SUBMIT_IMAGE"
                    onClick={this.handleSubmit}
                  />
                </div>
          </div>
        </Paper>
      </form>
    )
  }
}

export default Image;
import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const style = {
  checks: {
    padding: '10px',
    width: '175px',
  },
};

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.checkHandle = this.checkHandle.bind(this);
  }

  checkHandle(e) {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <Checkbox name={this.props.name}
                checked={this.state.checked}
                onClick={this.checkHandle}
                style={style.checks}
                label={this.props.type}
                value={this.props.type} />
    )
  }
}

export default Check;
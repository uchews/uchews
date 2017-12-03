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
    this.checkHandle = this.checkHandle.bind(this);
    this.state = {
      checked: false,
    };
  }

  checkHandle(e) {
    let val = e.target.value;

    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked) {
        this.props.choose.push(val);
      } else {
        let i = this.props.choose.indexOf(val);
        this.props.choose.splice(i, 1);
      }
    });

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
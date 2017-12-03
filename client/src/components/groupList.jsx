import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      open: false
    };
  }

  // state = {
  //   open: false
  // };

  // handleToggle() => {
  //   this.setState({open: !this.state.open,});
  // }


  handleToggle () {
    this.setState({open: !this.state.open});
  }

  render() {
    return (<div>
      <Toggle
      type="checkbox" value="off"
      toggled={this.state.open}
      onToggle={this.handleToggle} />
      <h2>Your Groups:</h2>
      <List>
        {this.props.grouplist.map((group) => {
          let locandmem = `location: ${group.location}
                           members: ${group.member}`
          return (<ListItem
            primaryText={group.title} primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem secondaryText={locandmem} />
            ]}/>
          )
          })}
      </List>
    </div>)
  }
}

export default GroupList;
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

  render() {
    return (<div>
      <h2>These are your CHEWY groups</h2>
      <List>
        {this.props.grouplist.map((group) => {
          let locandmem = `location: ${group.location}
                           members: ${group.members}`;
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
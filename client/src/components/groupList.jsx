import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';


class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      open: false
    };
    this.groupList = this.groupList.bind(this);
  }

  groupList() {
    return (
      <div>
      {this.props.grouplist.map((group) => {
        return (
          <div id="group">
            <h4>group name: {group.title}</h4>
            <h5>members: {group.members}</h5>
            <RaisedButton label="Result" default={true} onClick={() => this.props.clickHandle("waiting")} />
          </div>
        )
      })}
      </div>
    )
  }

  render() {
    return (<div>
      {this.groupList()}
      {/*<h2>These are your CHEWY groups</h2>
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
      </List>*/}
    </div>)
  }
}

export default GroupList;
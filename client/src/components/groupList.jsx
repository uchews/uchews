import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Build from 'material-ui/svg-icons/action/build';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';





class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      open: false
    };
    this.groupList = this.groupList.bind(this);
    this.contactList = this.contactList.bind(this);
    this.groupTitle = this.groupTitle.bind(this);
  }

  images(number) {
    var img1 = <img src="https://images.unsplash.com/photo-1425934398893-310a009a77f9?auto=format&fit=crop&w=1951&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
    var img2 = <img src="https://images.unsplash.com/photo-1488551511020-571c741f122a?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
    var img3 = <img src="https://images.unsplash.com/photo-1485381473713-c6131409c0be?auto=format&fit=crop&w=1910&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
    if (number === 1) {
      return img1;
    } else if (number ===2) {
      return img2;
    } else if (number ===3) {
      return img3;
    }
  }

  groupList() {
    return (
      <div>
      {this.props.grouplist.map((group) => {
        return (
          <div id="group">
            <h2>{group.title}</h2>

            <h4>{group.members}</h4>
            <RaisedButton icon={<Build/>} default={true} label="Compile Result!"/>
          </div>
        )
      })}
      </div>
    )
  }

  groupTitle(title) {
    if (title === '') {
      return ('Group title not defined');
    } else {
      return title;
    }
  }

  contactList() {
    return(
      <div id="contact">
      {this.props.grouplist.map((group) => {
        return(
          <div id="group">
            <h2>{this.groupTitle(group.title)}</h2>
            <RaisedButton icon={<Build/>} default={true} onClick={() => {this.props.updateGroup(group.title, this.props.submitForm)}} label="Result"/>
              <List>
                {group.members.map((member)=> {
                  return(
                    <div>
                      <ListItem
                        primaryText={member}
                        leftIcon={<ActionGrade color={pinkA200} />}
                        rightAvatar={<Avatar src="https://images.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" />}
                      />
                    </div>
                  )
                })}
              </List>
          </div>
        )
      })}
      </div>
    )
  }

  render() {
    return (<div id="grouplist">
      {/*{this.groupList()}*/}
      {this.contactList()}
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
import {List, ListItem, ListItemText} from 'material-ui/List';

const GroupList =(props) => {
  return (<div>
    <h2>Your Groups:</h2>
    <List>
      {props.grouplist.map((group) => {
        let locandmem = `location: ${group.location}
                         membrs: ${group.member}`
        return (
          <ListItem primaryText={group.title}
          secondaryText={locandmem} />
          )
        })}
    </List>
  </div>)
}

export default GroupList;
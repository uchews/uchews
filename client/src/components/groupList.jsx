const GroupList =(props) => {
  return (<div>
    <h2>Your Groups:</h2>
    {props.grouplist.map((group) => (
      <li>
        Group: {group.title}
        Location: {group.location}
        Members: {group.members}
      </li>)
    )}
  </div>)
}

export default GroupList;
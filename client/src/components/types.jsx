import React from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const style = {
  paper: {
    display: 'inline-block',
    height: '50%',
    margin: '0 auto',
    padding: 50,
    textAlign: 'center',
    width: '50%'
  }
};

const Types = (props) => {

  // TODO:
  // Enable required input error handling
  // enable changeHandle on radio buttons
  // enable get request on button click
    // do props.clickHandle("waiting") in get request function

  return (
    <div>
    <Paper style={style.paper} zDepth={3}>
      <h2>What are you in the mood for?</h2>
      <Table>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn><Checkbox label="American" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Asian" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Chinese" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Dessert" /></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><Checkbox label="Greek" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Hambergers" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Healthy" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Indian" /></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><Checkbox label="Italian" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Japanese" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Mediterranean" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Mexican" /></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><Checkbox label="Middle Eastern" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Pasta" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Pizza" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Salads" /></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><Checkbox label="Sandwiches" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Seafood" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Soup" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Sushi" /></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn><Checkbox label="Thai" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Vegetarian" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Wings" /></TableRowColumn>
            <TableRowColumn><Checkbox label="Wraps" /></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      <RaisedButton label="Next" primary={true} onClick={() => props.clickHandle("waiting")} />
    </Paper>
    </div>
  )

}

export default Types;
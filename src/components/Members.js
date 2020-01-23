// this is the members table. just work within the array to update the data

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const NumberCustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 40,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    margin: '0 auto',
    width: '75%',
    height: 700,
    marginBottom: theme.spacing.unit * 5,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 5,
  },
  founder: {
    marginRight: '15px',
    position: 'relative',
    left: '10px',
    padding: '1%',
    borderRadius: '5px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
});

let id = 0;
function createData(name, group, founder) {
  id += 1;
  // this is the line format for the table data below. do not put the ID in,
  return { id, name, group, founder };
}
/* this is the members table data, just create a new row for the new members
you should be able to figure out what's going on in this array
  */

const rows = [
  createData('Michael Trimble', 'Alpha', 'Founder'),
  createData('Nathanael Patterson', 'Alpha', 'Founder'),
  createData('Connor Clark', 'Alpha', 'Founder'),
  createData('Logan Dodd', 'Alpha', 'Founder'),
  createData('Nicholas Early', 'Alpha', 'Founder'),
  createData('Ryan Mellin', 'Alpha', 'Founder'),
  createData('Kyler Miller', 'Alpha', 'Founder'),
  createData('Cooper Murphy', 'Alpha', 'Founder'),
  createData('Anthony Philips', 'Alpha', 'Founder'),
  createData('Corey Schoeber', 'Alpha', 'Founder'),
  createData('Secher Wagner', 'Alpha', 'Founder'),
  createData('Tyler Franks', 'Beta', 'Founder'),
  createData('Omar Gomez', 'Beta', 'Founder'),
  createData('Thomas Grassia', 'Beta', 'Founder'),
  createData('Wilson "Taber" Slayden', 'Beta', 'Founder'),
  createData('Sean Spindel', 'Beta', 'Founder'),
  createData('Tyler Haver', 'Gamma', 'Founder'),
  createData('Ty Guerra', 'Gamma', 'Founder'),
  createData('Eddy Lopez', 'Gamma', 'Founder'),
  createData('Scott Morgan', 'Gamma', 'Founder'),
  createData('Matt Nelson', 'Gamma', 'Founder'),
  createData('Jerod Arnold', 'Delta', 'Founder'),
  createData('Samuel "Sam" Bailey', 'Delta', 'Founder'),
  createData('Joshua "Josh" Brown', 'Delta', 'Founder'),
  createData('Connor Davis', 'Delta', 'Founder'),
  createData('Christopher "Christo" Erker', 'Delta', 'Founder'),
  createData('Matthew Keenan', 'Delta', 'Founder'),
  createData('Carlos "Los" Matejka', 'Delta', 'Founder'),
  createData('Nicholas Pontejos', 'Delta', 'Founder'),
  createData('Henrique Rio', 'Delta', 'Founder'),
  createData('Connor Scott', 'Delta', 'Founder'),
];

function Members(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.header}>
        <Typography align="center" variant="h4" marked="center">
          Members
        </Typography>
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead style={{ position: 'sticky' }}>
            <TableRow>
              <CustomTableCell align="left" padding="checkbox">
                Number
              </CustomTableCell>
              <CustomTableCell>Name</CustomTableCell>
              <CustomTableCell align="right">Class</CustomTableCell>
              <CustomTableCell align="right" />
              <CustomTableCell align="right" />
              <CustomTableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <NumberCustomTableCell
                  component="th"
                  scope="row"
                  padding="checkbox"
                >
                  {row.id}
                </NumberCustomTableCell>
                <CustomTableCell align="left">
                  {row.founder && (
                    <span className={classes.founder}>{row.founder}</span>
                  )}
                  {row.name}
                </CustomTableCell>
                <CustomTableCell align="right">{row.group}</CustomTableCell>
                <CustomTableCell align="right">{row.fat}</CustomTableCell>
                <CustomTableCell align="right">{row.carbs}</CustomTableCell>
                <CustomTableCell align="right">{row.protein}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

Members.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Members);

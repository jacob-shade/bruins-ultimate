import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(number, player, pronouns, position, role) {
  return { number, player, pronouns, position, role };
}

const rows = [
  createData("03/03/21", "2:00PM", "James Maddison", "Oak Mar Rec Center", "5-6", "L"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="center">Player</TableCell>
            <TableCell align="center">Pronouns</TableCell>
            <TableCell align="center">Position</TableCell>
            <TableCell align="center">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="center">{row.player}</TableCell>
              <TableCell align="center">{row.pronouns}</TableCell>
              <TableCell align="center">{row.position}</TableCell>
              <TableCell align="center">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import uniqid from "uniqid";
import "./Table.css";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function RosterTable(props) {
  const rows = props.rows;
  const classes = useStyles();

  return (
    <TableContainer className="table table-container" component={Paper}>
      <Table className={classes.table} aria-label="cusomized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">Player</StyledTableCell>
            <StyledTableCell align="center">Pronouns</StyledTableCell>
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center">Role</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={uniqid()}>
              <StyledTableCell align="center">{row.number}</StyledTableCell>
              <StyledTableCell align="center">{row.player}</StyledTableCell>
              <StyledTableCell align="center">{row.pronouns}</StyledTableCell>
              <StyledTableCell align="center">{row.grade}</StyledTableCell>
              <StyledTableCell align="center">{row.role}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

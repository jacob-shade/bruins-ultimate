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

export default function ScheduleTable(props) {
  const rows = props.rows;
  const classes = useStyles();

  return (
    <TableContainer className="table table-container" component={Paper}>
      <Table className={classes.table} aria-label="cusomized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Opponent</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Score</StyledTableCell>
            <StyledTableCell align="center">W/L</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={uniqid()}>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">{row.opponent}</StyledTableCell>
              <StyledTableCell align="center">{row.location}</StyledTableCell>
              <StyledTableCell align="center">{row.score}</StyledTableCell>
              <StyledTableCell align="center">{row.outcome}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

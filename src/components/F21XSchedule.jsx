import React from "react";
import ScheduleTable from "./ScheduleTable";
import '../App.css';


function createData(date, time, opponent, location, score, outcome) {
  return { date, time, opponent, location, score, outcome };
}

const rows = [
  createData("09/12", "12:30PM", "Madison", "Lake Fairfax Park", "1-15", "L"),
  createData("09/19", "12:30PM", "Marshall", "Lake Fairfax Park", "1-15", "L"),
  createData("09/19", "12:30PM", "South Lakes", "Lake Fairfax Park", "2-10", "L"),
  createData("09/26", "12:30PM", "Madison", "Lake Fairfax Park", "?", "L"),
  createData("09/26", "12:30PM", "Ad Fontes", "Lake Fairfax Park", "3-11", "L"),
  createData("10/03", "12:30PM", "HB Woodlawn", "Lake Fairfax Park", "2-14", "L"),
  createData("10/03", "12:30PM", "Alexandria", "Lake Fairfax Park", "4-14", "L"),
  createData("10/17", "12:30PM", "HB Woodlawn", "Lake Fairfax Park", "0-15", "L"),
  createData("10/17", "12:30PM", "South Lakes", "Lake Fairfax Park", "?", "L"),
  createData("10/24", "12:30PM", "Marshall", "Lake Fairfax Park", "3-12", "L"),
  createData("10/24", "12:30PM", "Alexandria", "Lake Fairfax Park", "2-10", "L"),
  createData("10/31", "12:30PM", "South Lakes", "Lake Fairfax Park", "?", "L"),
  createData("10/31", "12:30PM", "HB Woodlawn", "Lake Fairfax Park", "?", "L"),
  createData("11/07", "10:00AM", "Madison", "Lake Fairfax Park", "3-13", "L"),
  createData("11/07", "11:50AM", "Marshall", "Lake Fairfax Park", "?", "W"),
  createData("11/07", "1:40PM", "Fort Defiance", "Lake Fairfax Park", "?", "L"),
  createData("11/13", "10:00AM", "Wilson", "Lake Fairfax Park", "0-13", "L"),
  createData("11/13", "11:45AM", "Washington & Liberty", "Lake Fairfax Park", "0-13", "L"),
  createData("11/13", "12:30PM", "South Lakes", "Lake Fairfax Park", "0-11", "L"),
  createData("11/14", "10:00AM", "Madison", "Lake Fairfax Park", "1-12", "L"),
  createData("11/14", "11:45AM", "Alexandria", "Lake Fairfax Park", "4-13", "L"),
  createData("11/14", "12:30PM", "HB Woodlawn", "Lake Fairfax Park", "1-15", "L"),
];

export default function F21XSchedule() {
  return (
    <>
      <ScheduleTable rows={rows} />
    </>
  );
}

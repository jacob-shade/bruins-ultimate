import React from "react";
import ScheduleTable from "./ScheduleTable";

function createData(date, time, opponent, location, score, outcome) {
  return { date, time, opponent, location, score, outcome };
}

const rows = [
  createData("03/14", "02:00PM", "Madison", "Oak Mar Rec Center", "5-6", "L"),
  createData("03/21", "02:00PM", "Woodson", "Oak Mar Rec Center", "?", "L"),
  createData(
    "04/11",
    "02:00PM",
    "Alexandria",
    "Lake Fairfax Park",
    "11-10",
    "W"
  ),
  createData("04/11", "04:00PM", "South Lakes", "Lake Fairfax Park", "9-10", "L"),
  createData("04/18", "02:00PM", "Marshall", "Lake Fairfax Park", "7-9", "L"),
  createData(
    "04/18",
    "04:00PM",
    "Thomas Jefferson",
    "Lake Fairfax Park",
    "10-12",
    "L"
  ),
  createData(
    "04/25",
    "02:00PM",
    "Chantilly",
    "Lake Fairfax Park",
    "?",
    "L"
  ),
  createData(
    "04/25",
    "04:00PM",
    "Madison",
    "Lake Fairfax Park",
    "5-13",
    "L"
  ),
  createData("05/02", "12:00PM", "Alexandria", "Lake Fairfax Park", "?", "L"),
  createData("05/02", "01:25PM", "Richmond", "Lake Fairfax Park", "?", "W"),
  createData("05/02", "02:50PM", "Chantilly", "Lake Fairfax Park", "?", "L"),
  createData("05/02", "05:40PM", "South Lakes", "Lake Fairfax Park", "?", "W"),
  createData("05/22", "12:00PM", "Wilson", "Lake Fairfax Park", "5-12", "L"),
  createData("05/22", "01:30PM", "HB Woodlawn", "Lake Fairfax Park", "3-10", "L"),
  createData("05/22", "03:00PM", "Wakefield", "Lake Fairfax Park", "5-9", "L"),
  createData("05/23", "10:00AM", "Wilson JV", "Lake Fairfax Park", "12-6", "W"),
  createData("05/23", "11:30AM", "Wakefield", "Lake Fairfax Park", "6-5", "W"),
];

export default function Sp21OSchedule() {
  return (
    <>
      <ScheduleTable rows={rows} />
    </>
  );
}

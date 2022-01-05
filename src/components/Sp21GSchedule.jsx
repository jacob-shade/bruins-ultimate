import React from "react";
import ScheduleTable from "./ScheduleTable";
import '../App.css';


function createData(date, time, opponent, location, score, outcome) {
  return { date, time, opponent, location, score, outcome };
}

const rows = [
  createData(
    "03/14",
    "12:00PM",
    "Madison / Woodson",
    "Oak Mar Rec Center",
    "?",
    "W"
  ),
  createData(
    "03/21",
    "12:00PM",
    "South Lakes / Alexandria",
    "Oak Mar Rec Center",
    "6-5",
    "W"
  ),
  createData(
    "04/11",
    "12:00PM",
    "Skymall / South Lakes",
    "Lake Fairfax Park",
    "?",
    "L"
  ),
  createData("04/18", "12:00PM", "Skymall", "Lake Fairfax Park", "?", "L"),
  createData("04/25", "12:00PM", "Madison", "Lake Fairfax Park", "5-11", "L"),
  createData("05/02", "08:45AM", "Wilson", "Lake Fairfax Park", "?", "L"),
  createData("05/02", "10:10PM", "Skymall", "Lake Fairfax Park", "?", "L"),
  createData("05/02", "11:45AM", "Madison", "Lake Fairfax Park", "?", "L"),
  createData("05/22", "09:00AM", "Wilson", "Lake Fairfax Park", "0-13", "L"),
  createData("05/22", "10:30AM", "Skymall", "Lake Fairfax Park", "4-9", "L"),
  createData("05/22", "12:00PM", "Yorktown", "Lake Fairfax Park", "5-4", "W"),
  createData("05/23", "10:00AM", "Washington & Liberty", "Lake Fairfax Park", "?", "L"),
  createData("05/23", "11:30AM", "Wilson", "Lake Fairfax Park", "?", "L"),
  createData("05/23", "02:45PM", "Yorktown", "Lake Fairfax Park", "?", "W"),
];

export default function Sp21GSchedule() {
  return (
    <>
      <ScheduleTable rows={rows} />
    </>
  );
}

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
    "Madluv / GWUT",
    "Oak Mar Rec Center",
    "?",
    "W"
  ),
  createData(
    "03/21",
    "12:00PM",
    "Reston / Alexandria",
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
  createData("04/25", "12:00PM", "Madluv", "Lake Fairfax Park", "5-11", "L"),
];

export default function Sp21GSchedule() {
  return (
    <>
      <ScheduleTable rows={rows} />
    </>
  );
}

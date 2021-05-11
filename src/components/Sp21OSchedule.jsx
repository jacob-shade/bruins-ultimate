import React from "react";
import ScheduleTable from "./ScheduleTable";

function createData(date, time, opponent, location, score, outcome) {
  return { date, time, opponent, location, score, outcome };
}

const rows = [
  createData("03/14", "02:00PM", "Madhouse", "Oak Mar Rec Center", "5-6", "L"),
  createData("03/21", "02:00PM", "WUT", "Oak Mar Rec Center", "?", "L"),
  createData(
    "04/11",
    "02:00PM",
    "TC Williams / West Potomac",
    "Lake Fairfax Park",
    "11-10",
    "W"
  ),
  createData("04/11", "04:00PM", "SeaHucks", "Lake Fairfax Park", "9-10", "L"),
  createData("04/18", "02:00PM", "Peppa Pigs", "Lake Fairfax Park", "7-9", "L"),
  createData(
    "04/18",
    "04:00PM",
    "TJ Chimeras",
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
    "Madhouse",
    "Lake Fairfax Park",
    "5-13",
    "L"
  ),
];

export default function Sp21OSchedule() {
  return (
    <>
      <ScheduleTable rows={rows} />
    </>
  );
}

import React from "react";
import ScheduleTable from "./ScheduleTable";

function createData(date, time, opponent, location, score, outcome) {
  return { date, time, opponent, location, score, outcome };
}

const rows = [
  createData("05/02", "08:45AM", "Wilson", "Lake Fairfax Park", "?", "L"),
  createData("05/02", "10:10PM", "Skymall", "Lake Fairfax Park", "?", "L"),
  createData("05/02", "11:45AM", "Madluv", "Lake Fairfax Park", "?", "L"),
];

export default function Sp21GFairfaxInviteSchedule() {
  return (
    <>
      <ScheduleTable rows={rows} />
    </>
  );
}

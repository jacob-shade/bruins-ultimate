import React from "react";
import ScheduleTable from "./ScheduleTable";

function createData(date, time, opponent, location, score, outcome) {
  return { date, time, opponent, location, score, outcome };
}

const rows = [
  createData("TBD", "TBD", "TBD", "TBD", "TBD", "TBD"),
];

export default function ScheduleTBD() {
  return (
    <>
      <ScheduleTable rows={rows} />
    </>
  );
}

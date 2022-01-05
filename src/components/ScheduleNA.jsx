import React from "react";
import ScheduleTable from "./ScheduleTable";

function createData(date, time, opponent, location, score, outcome) {
  return { date, time, opponent, location, score, outcome };
}

const rows = [
  createData("N/A", "N/A", "N/A", "N/A", "N/A", "N/A"),
];

export default function ScheduleNA() {
  return (
    <>
      <ScheduleTable rows={rows} />
    </>
  );
}

import React from "react";
import ScheduleTable from "./ScheduleTable";

function createData(date, time, opponent, location, score, outcome) {
  return { date, time, opponent, location, score, outcome };
}

const rows = [
  createData("05/02", "12:00PM", "TC Williams / West Potomac", "Lake Fairfax Park", "?", "L"),
  createData("05/02", "01:25PM", "RUYO", "Lake Fairfax Park", "?", "W"),
  createData("05/02", "02:50PM", "Chantilly", "Lake Fairfax Park", "?", "L"),
  createData("05/02", "05:40PM", "SeaHucks", "Lake Fairfax Park", "?", "W"),
];

export default function Sp21OFairfaxInviteSchedule() {
  return (
    <>
      <ScheduleTable rows={rows} />
    </>
  );
}

import React from 'react';
import RosterTable from "./RosterTable";
import '../App.css';

function createData(number, player, pronouns, grade, role) {
  return { number, player, pronouns, grade, role };
}

const rows = [
  createData("NA", "NA", "NA", "NA", "NA"),
];

export default function RosterNA() {
  return (
    <>
      <RosterTable rows={rows} />
    </>
  );
}
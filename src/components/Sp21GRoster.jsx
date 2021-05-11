import React from 'react';
import RosterTable from "./RosterTable";
import '../App.css';

function createData(number, player, pronouns, grade, role) {
  return { number, player, pronouns, grade, role };
}

const rows = [
  createData("13", "Bianca Gonzalez", "she/her", "10", ""),
  createData("22", "Taylor Brooke", "she/her", "12", ""),
  createData("27", "Mia Pitts", "they/them", "10", "R"),
  createData("32", "Phoebe Nichols", "she/her", "11", "C"),
  createData("87", "Michaela Curran", "she/her", "10", "C"),
  createData("91", "Megan Kurisky", "she/her", "12", "C"),
  createData("-", "Lindy Maher", "she/her", "11", "R"),
  createData("-", "Catalina Fernandez", "she/her", "9", "R"),
  createData("-", "Vale Gonzalez", "she/her", "10", "R"),
];

export default function Sp21GRoster() {
  return (
    <>
      <RosterTable rows={rows} />
    </>
  );
}
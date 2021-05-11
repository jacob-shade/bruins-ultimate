import React from 'react';
import RosterTable from "./RosterTable";
import '../App.css';

function createData(number, player, pronouns, grade, role) {
  return { number, player, pronouns, grade, role };
}

const rows = [
  createData("1", "Juan Garreton", "he/him", "12", ""),
  createData("7", "Joshua Oliver", "he/him", "12", "C"),
  createData("7", "Gabe Sejas Fernandez", "he/him", "10", ""),
  createData("9", "Pablo Sejas Fernandez", "he/him", "12", ""),
  createData("13", "Alex Cullen", "he/him", "12", ""),
  createData("14", "Brady Croghan", "he/him", "12", ""),
  createData("15", "James Luetkenhaus", "he/him", "11", "R"),
  createData("25", "Nolan Smith", "he/him", "12", "C"),
  createData("28", "Tyler Eom", "he/him", "12", ""),
  createData("29", "Camilo Gonzalez", "he/him", "11", ""),
  createData("36", "Alonzo Mendoza", "he/him", "12", ""),
  createData("50", "Mark Meskill", "he/him", "12", "R"),
  createData("54", "Elliot Baird", "he/him", "11", "R"),
  createData("87", "Michaela Curran", "she/her", "10", "C"),
];

export default function Sp21ORoster() {
  return (
    <>
      <RosterTable rows={rows} />
    </>
  );
}
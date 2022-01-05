import React from 'react';
import RosterTable from "./RosterTable";
import '../App.css';

function createData(number, player, pronouns, grade, role) {
  return { number, player, pronouns, grade, role };
}

const rows = [
  createData("13", "Bianca Gonzalez", "she/her", "11", ""),
  createData("15", "James Luetkenhaus", "he/him", "12", "C"),
  createData("27", "Mia Pitts", "they/them", "11", ""),
  createData("29", "Camilo Gonzalez", "he/him", "12", ""),
  createData("32", "Phoebe Nichols", "she/her", "12", "C"),
  createData("54", "Elliot Baird", "he/him", "12", "R"),
  createData("87", "Michaela Curran", "she/her", "11", "C"),
  createData("-", "Adam Sitt", "he/him", "12", ""),
  createData("-", "Anton Tibayan", "he/him", "9", "R"),
  createData("-", "Camile McLoughlin", "she/her", "11", "R"),
  createData("-", "Genevieve Deady", "she/her", "10", "R"),
  createData("-", "Keaman Chang", "he/him", "11", "R"),
  createData("-", "Layla Clayton", "she/her", "12", "R"),
  createData("-", "Lindy Maher", "she/her", "12", ""),
  createData("-", "Megan Lincicum", "she/her", "10", "R"),
  createData("-", "Reira Erickson", "she/they", "10", "R"),
  createData("-", "Sean Underwood", "he/him", "10", "R"),
  createData("-", "Siam Salam", "he/him", "11", "R"),
  createData("-", "Sophie Johnson", "they/them", "9", "R"),
  createData("-", "Vale Gonzalez", "she/her", "11", ""),
  createData("-", "Wilson Weingast", "he/him", "11", "R"),
];

export default function Sp21GRoster() {
  return (
    <>
      <RosterTable rows={rows} />
    </>
  );
}
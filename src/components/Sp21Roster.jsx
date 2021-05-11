import React from 'react';
import Sp21GRoster from "./Sp21GRoster";
import Sp21ORoster from "./Sp21ORoster";
import '../App.css';
import "./Table.css";

export default function Sp21Schedule() {
  return (
    <>
      <h1>Girls Roster</h1>
      <hr></hr>
      <Sp21GRoster />
      <h1>Open Roster</h1>
      <hr></hr>
      <Sp21ORoster />
    </>
  );
}
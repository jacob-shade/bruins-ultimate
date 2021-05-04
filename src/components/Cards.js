import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Recent Team Events</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src="images/sign_up.png"
              text="Open Team Played Strong Throughout the Tournament"
              label="Fairfax Invite 2021"
              path="/about"
            />
            <CardItem
              src="images/charlie_catch.PNG"
              text="Bruins Finish 2nd at Mixed 5v5 Tournament"
              label="Hanover Ultimate Classic 2021"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

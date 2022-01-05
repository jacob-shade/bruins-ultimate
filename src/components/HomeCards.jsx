import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function HomeCards() {
  return (
    <div className="cards">
      <h1 className="home">Recent Team Events</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src="images/sign_up.png"
              text="Finding Our Flow at the Fairfax Finale"
              label="Fairfax Finale 2021"
              path="/about"
            />
            <CardItem
              src="images/charlie_catch.PNG"
              text="Competed in First Ever VA Mixed States"
              label="VA Mixed States"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeCards;

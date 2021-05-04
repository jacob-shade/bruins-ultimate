import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out how we did in these recent events!</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="card--items">
            <CardItem
              src="images/sign_up.png"
              text="Open team played strong throughout the tournament"
              label="Fairfax Invite 2021"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

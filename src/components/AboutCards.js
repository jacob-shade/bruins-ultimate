import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function AboutCards() {
  return (
    <div className="cards">
      <h1 className="about">Girls Team Leadership</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src="images/sign_up.png"
              text="Megan Kurisky"
              label="Captain"
              path="/megan-kurisky"
            />
            <CardItem
              src="images/charlie_catch.PNG"
              text="Phoebe Nichols"
              label="Captain"
              path="/phoebe-nichols"
            />
            <CardItem
              src="images/charlie_catch.PNG"
              text="Michaela Curran"
              label="Captain"
              path="/michaela-curran"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src="images/sign_up.png"
              text="Julianna Gohman"
              label="Coach"
              path="/julianna-gohman"
            />
            <CardItem
              src="images/charlie_catch.PNG"
              text="Ciara Johnson"
              label="Coach"
              path="/ciara-johnson"
            />
          </ul>
        </div>
      </div>
      <h1 className="about">Open Team Leadership</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src="images/sign_up.png"
              text="Nolan Smith"
              label="Captain"
              path="/nolan-smith"
            />
            <CardItem
              src="images/charlie_catch.PNG"
              text="Joshua Oliver"
              label="Captain"
              path="/joshua-oliver"
            />
            <CardItem
              src="images/charlie_catch.PNG"
              text="Michaela Curran"
              label="Captain"
              path="/michaela-curran"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src="images/sign_up.png"
              text="Jacob Shade"
              label="Coach"
              path="/jacob-shade"
            />
            <CardItem
              src="images/charlie_catch.PNG"
              text="Austin Do"
              label="Coach"
              path="/austin-do"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutCards;

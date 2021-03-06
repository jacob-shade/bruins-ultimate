import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>BRUINS ULTIMATE</h1>
      <p>Come join the team!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          linkTo="/about"
        >
          ABOUT US
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          linkTo="/sign-up"
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

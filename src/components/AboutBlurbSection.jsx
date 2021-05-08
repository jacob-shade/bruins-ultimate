import React from "react";
import BlurbSection from "./BlurbSection";
import "./BlurbSection.css";

function AboutBlurbSection() {
  return (
    <div className="blurb">
      <div className="blurb-container">
        <h1 className="about-us">About Us</h1>
        <hr></hr>
        <div className="blurb-wrapper">
          <BlurbSection
            src="../images/sign_up.png"
            alt="team photo"
            text1="Bruins Ultimate is a youth ultimate team from Lake Braddock Secondary School in Burke, VA. In the Fall we play mixed(co-ed) and in the Spring we play as seperate girls and open teams. At the end of the spring, we compete at the Virginia State Championships and we enter numerous tournaments throughout the year!"
            text2="Practice Info:"
            text3="WHEN?&nbsp;&nbsp;&emsp;M, W, Th from 3:30-6:00pm"
            text4="WHERE?&emsp;Lake Braddock Park, Upper Field"
            text5="If you are a Lake Braddock student and are thinking about joining Bruins Ultimate, fill out the interest form here:"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutBlurbSection;

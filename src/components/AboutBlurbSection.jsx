import React from "react";
import BlurbSection from "./BlurbSection";
import "./BlurbSection.css";

function AboutBlurbSection() {
  return (
    <div className="blurb">
      <div className="blurb-container">
        <h1 className="about-us">About Us</h1>
        <hr></hr>
          <BlurbSection
            src="../images/fxu-end-fall-19.jpg"
            alt="team photo"
            text1="Welcome to the official website of Lake Braddock Ultimate! The LB Ultimate program participates in Fairfax Ultimate leagues and enters numerous tournaments throughout the year. The club was originally founded in 2016 and we have grown to support HS Varsity & JV Boys, HS Gxrls, and MS teams. We are excited to see our program continue to grow each and every year!"
            text2="Practice Info:"
            text3="WHEN?&nbsp;&nbsp;&emsp;M, T, W, Th from 3:30-5:30pm"
            text4="WHERE?&emsp;Lake Braddock Park, Upper Field"
            text5="If you are a Lake Braddock student and are thinking about joining Bruins Ultimate, fill out the interest form here:"
          />
      </div>
    </div>
  );
}

export default AboutBlurbSection;

import React from "react";
import { Button } from "./Button";
import "./Button.css"
import "./BlurbSection.css";

function BlurbSection(props) {
  return (
    <section className="d-flex-r blurb-section">
      <img
        src={process.env.PUBLIC_URL + props.src}
        alt={props.alt}
        className="blurb-section-img w-50"
      />
      <div className="blurb-section-info w-50">
        <p className="blurb-section-text">{props.text1}</p>
        <hr className="hr-skinny"></hr>
        <p className="blurb-section-practice">{props.text2}</p>
        <p className="blurb-section-practice list">{props.text3}</p>
        <p className="blurb-section-text list">{props.text4}</p>
        <hr className="hr-skinny"></hr>
        <p className="blurb-section-bottom">{props.text5}</p>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          linkTo="/sign-up"
        >
          Sign Up!
        </Button>
      </div>
    </section>
  );
}

export default BlurbSection;

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
        <p className="blurb-section-practice-header">{props.text2}</p>
        <p className="blurb-section-practice list">{props.text3}</p>
        <p className="blurb-section-practice list">{props.text4}</p>
        <p className="blurb-section-practice list-end">{props.text5}</p>
        <hr className="hr-skinny"></hr>
        <p className="blurb-section-text">{props.text6}</p>
        <Button
          className="btns sign-up-btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          linkTo="/sign-up"
        >
          Sign Up!
        </Button>
        <hr className="hr-skinny after-btn"></hr>
        <p className="blurb-section-bottom">{props.text7}</p>
        <Button
          className="btns sign-up-btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          linkTo="/faqs"
        >
          FAQs
        </Button>
      </div>
    </section>
  );
}

export default BlurbSection;

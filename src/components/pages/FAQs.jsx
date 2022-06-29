import React from "react";
import { Button } from "../Button";
import "./FAQs.css";

export default function FAQs() {
  return (
    <div className="faqs">
      <h1>FAQs</h1>
      <hr></hr>
      <div className="d-flex-r">
        <div className="d-flex-col">
          <h2>Do I need experience to play?</h2>
          <p>
            Nope! No experience is needed. We will teach you everything you need
            to know! Yes, that means even if you don't know how to throw.
            Everyone is welcome!
          </p>
          <h2>How do you play ultimate?</h2>
          <p>
            10 Simple Rules made by USA Ultimate:{" "}
            <a
              target="_blank"
              href="https://usaultimate.org/rules/10-simple-rules/"
            >
              rules
            </a>
          </p>
          <h2>When and where does the team practice?</h2>
          <p>HS practices T, W, Th from 3:30-5:30 at Lake Braddock Park, Upper Field. MS practices on Mondays and Wednesdays at the same time and place. Sign up to make sure you are notified of practice!</p>
          <h2>Where is Lake Braddock Park?</h2>
          <p>
            It's just a short walk from the school. Directions{" "}
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Lake+Braddock+School+Site+Park,+Tripolis+Ct,+Burke,+VA+22015/@38.8065531,-77.267041,16z/data=!4m5!3m4!1s0x89b64de9a3b9560d:0x70cdcfac092ab38f!8m2!3d38.8068079!4d-77.271046"
            >
              here
            </a>
          </p>
          <h2>What should I bring to practice?</h2>
          <p>
            All you need is a white and dark shirt, water, and cleats if you
            have em. Don't bring a grey or tie dye shirt cause they aren't white
            or dark
          </p>
          <h2>Should I bring a disc?</h2>
          <p>If it is made by Wham-O, you should probably leave it at home.</p>
          <h2>Do I have to pay anything to play?</h2>
          <p>
            Yes, we participate in the{" "}
            <a target="_blank" href="https://fairfaxultimate.org">
              Fairfax Ultimate
            </a>{" "}
            highschool leagues. We will also go to a few tournaments each
            semester, but they aren't too expensive. If money is an issue, feel
            free to reach out to the coaches and we can figure something out!
          </p>
          <h2>How can I find out more info about the team?</h2>
          <p>You can check the about page and sign up for more info!{" "}<Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          linkTo="/sign-up"
        >
          Sign Up!
        </Button></p>
        </div>
        <img
          src="../../images/states-19-4.PNG"
          alt="faq pic"
          className="faq-img w-50"
        />
      </div>
    </div>
  );
}

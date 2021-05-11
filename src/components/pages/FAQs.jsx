import React from "react";
import BlurbSection from "../BlurbSection"
import "./FAQs.css";

export default function FAQs() {
  return (
    <>
      <BlurbSection
            src="../images/sign_up.png"
            alt="team photo"
            text1="Bruins Ultimate is a youth ultimate team from Lake Braddock Secondary School in Burke, VA. In the Fall we play mixed(co-ed) and in the Spring we play as seperate girls and open teams. At the end of the spring, we compete at the Virginia State Championships and we enter numerous tournaments throughout the year!"
            text2="Practice Info:"
            text3="WHEN?&nbsp;&nbsp;&emsp;M, W, Th from 3:30-6:00pm"
            text4="WHERE?&emsp;Lake Braddock Park, Upper Field"
            text5="If you are a Lake Braddock student and are thinking about joining Bruins Ultimate, fill out the interest form here:"
          />
      <h1>FAQs</h1>
      <hr></hr>
      <h3>Do I need experience to play?</h3>
      <p>
        Nope! No experience is needed. We will teach you everything you need to
        know! Yes, that means even if you don't know how to throw. Everyone is
        welcome!
      </p>
      <h3>When and where does the team practice?</h3>
      <p>We practice from 3:30-6:00 at Lake Braddock Park, Upper Field.</p>
      <h3>Where is Lake Braddock Park?</h3>
      <p>It's just a short walk from the school. **LINK**</p>
      <h3>What should I bring to practice?</h3>
      <p>
        All you need is a white and dark shirt, water, and cleats if you have
        em. Don't bring a grey or tie dye shirt cause they aren't white or dark
      </p>
      <h3>Should I bring a frisbee?</h3>
      <p>If it is made by Wham-O, you should probably leave it at home.</p>
      <h3>Do I have to pay anything to play?</h3>
      <p>
        Yes, we participate in the Fairfax Ultimate highschool leagues. We will
        also go to a few tournaments each semester, but they aren't too expesive
      </p>
      <h3>How can I find out more info about the team?</h3>
      <p>You can check the about page and sign up for more info!</p>
    </>
  );
}

import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div id="about" className="aboutsection">
      <div className="flexcont">
        <div className="Headingmain">
          <div>
            Failure is the seasoning
            <br /> that enriches <span className="highlight">success</span>
          </div>
          <div className="aboutText">
            As a dedicated Software Engineer and Web Developer, I focus on{" "}
            <br />
            building innovative, efficient, and user-focused solutions,
            transforming
            <br /> challenges into opportunities to create impactful digital
            experiences
          </div>
        </div>

        <div className="button-container">
          <button className="cvButton">
            Download CV
            <img src="/icon2.png" alt="Next" className="buttonImage" />
          </button>
        </div>
      </div>
        <div className="emptyGap"></div>
    </div>
  );
}

export default About;

import React from "react";
import "../Styles/Home.css";

function Home() {
  return (
    <div id="home" className="Homemain">
      <div className="fleximg">
        <div className="content">
          <div className="text-container">
            <div className="animated-text">
              <span className="highlight">IMAGINATION</span> IS MORE
              <br />
              <span>IMPORTANT THAN KNOWLEDGE</span>
            </div>
          </div>
          <div className="text-container2">
            <span className="animated-text2">
              Together we the people can achieve more than any single person
              <br />
              could ever do alone
            </span>
          </div>
          <div>
            
          </div>
        </div>
        <div className="imgadj">
          <img src="/myImg.png" alt="Descriptive Image" className="imgbg" />
        </div>
      </div>
    </div>
  );
}

export default Home;

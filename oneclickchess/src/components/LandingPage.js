import React from "react";
import logo from "../images/logo.jpg";
import play from "../images/play.jpg";
import github from "../images/github.png";
import medium from "../images/medium.png";
const LandingPage = () => {
  return (
    <div>
      <div className="App">
        <img src={logo} alt="logo" />
      </div>
      <div className="play">
        <img src={play} alt="play" className="play" />
      </div>

      <div className="socialmedias">
        <a href="https://www.github.com/adamfarid453">
          <img src={github} alt="github" className="github" />
        </a>
        <a href="https://medium.com/@adamfarid453">
          <img src={medium} alt="medium" className="medium" />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;

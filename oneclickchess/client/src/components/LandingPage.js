import React from "react";
import logo from "../images/logo.jpg";
import { ReactComponent as Play } from "../images/play.svg";
import { useState } from "react";
import Footer from "./Footer";
import JoinGame from "./JoinGame";
const LandingPage = () => {
  const [showLogin, setShowResults] = useState(false);
  const onClick = () => {
    setShowResults(true);
  };
  const onClick2 = () => {
    setShowResults(false);
  };
  return (
    <div>
      <div className="App">
        <img src={logo} alt="logo" onClick={onClick2} />
      </div>
      <div className="joinGame" onClick={onClick}>
        {showLogin ? <JoinGame /> : <Play className="play" />}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

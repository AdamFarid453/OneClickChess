import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Test = () => {
  const location = useLocation();
  //console.log(location);
  let lawl = location.state.username.value;
  return (
    <div className="App">
      <h1>Welcome to One Click Chess {lawl}, Please wait a moment</h1>
      <Link to={"/"}>
        <h6>Click here to go back</h6>
      </Link>
    </div>
  );
};

export default Test;

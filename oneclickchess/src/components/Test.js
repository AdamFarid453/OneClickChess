import React from "react";
import { useLocation } from "react-router-dom";

const Test = (props) => {
  const location = useLocation();

  console.log(location);
  let lawl = location.state.test;
  return (
    <div>
      <h1>THIS IS A TEST YOUR NAME IS {lawl}</h1>
    </div>
  );
};

export default Test;

import React from "react";
import { useLocation } from "react-router-dom";

export default function BotGame() {
  const location = useLocation();
  console.log(location);

  //   console.log(process.env);
  //   console.log(process.env.REACT_APP_LICHESS_TOKEN);
  const headers = {
    Authorization: "Bearer " + process.env.REACT_APP_LICHESS_TOKEN,
  };
  fetch("https://lichess.org/player", { headers })
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      <h1>Bot game</h1>
    </div>
  );
}

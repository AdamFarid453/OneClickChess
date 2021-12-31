import React from "react";
// import Test from "./Test";
import { Link } from "react-router-dom";
const JoinGame = () => {
  return (
    <div className="formButtons">
      <form>
        <label>
          <input type="text" placeholder="Enter your username" />
        </label>
      </form>
      <Link
        className="btn btn-primary"
        to={"/createGame"}
        state={{ test: "hi" }}
      >
        Create Game
      </Link>
    </div>
  );
};

export default JoinGame;

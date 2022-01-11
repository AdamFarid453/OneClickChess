import React from "react";
import { useState } from "react";
// import Test from "./Test";
import { Link } from "react-router-dom";
const JoinGame = () => {
  const [user, setUser] = useState("");
  const handleSubmit = (e) => setUser(e.target.value);
  return (
    <div className="formButtons">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={user}
            placeholder="Enter your username"
            onChange={handleSubmit}
          />
        </label>
      </form>
      <Link
        className="btn btn-primary"
        to={"/createGame"}
        state={{ username: { user } }}
      >
        Create Game
      </Link>
    </div>
  );
};

export default JoinGame;

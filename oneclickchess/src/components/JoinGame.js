import React from "react";

const JoinGame = () => {
  return (
    <div className="formButtons">
      <form>
        <label>
          <input type="text" placeholder="Enter your username" />
        </label>
      </form>
      <button>Join game</button>
    </div>
  );
};

export default JoinGame;

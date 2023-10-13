import React from "react";
import "./GameFooter.css";

const GameFooter = ({ handleGameRestart }) => {
  return (
    <div className="game-footer">
      <button className="game-reset-btn" onClick={handleGameRestart}>
        Restart Game
      </button>
    </div>
  );
};

export default GameFooter;

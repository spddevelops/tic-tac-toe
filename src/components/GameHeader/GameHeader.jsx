import React from "react";
import "./GameHeader.css";
import { useAtomValue } from "jotai";
import { gamePlayersAtom } from "../../store/atoms/player";

const GameHeader = () => {
  const players = useAtomValue(gamePlayersAtom);
  return (
    <div className="game-header">
      <div className="game-player-title">{players[0].name}</div>
      <div>VS</div>
      <div className="game-player-title">{players[1].name}</div>
    </div>
  );
};

export default GameHeader;

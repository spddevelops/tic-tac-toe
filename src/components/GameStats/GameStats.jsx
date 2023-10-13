import React from "react";
import "./GameStats.css";
import { useAtomValue } from "jotai";
import { currentPlayerAtom } from "../../store/atoms/player";
import { gameStatusAtom } from "../../store/atoms/game";
import { GAME_STATUS_DRAW, GAME_STATUS_WON } from "../../constants";

const GameStats = () => {
  const currentPlayer = useAtomValue(currentPlayerAtom);
  const gameStatus = useAtomValue(gameStatusAtom);

  const renderContent = () => {
    if (gameStatus === GAME_STATUS_WON) {
      return <div>Game won by {currentPlayer.name} !!!</div>;
    } else if (gameStatus === GAME_STATUS_DRAW) {
      return <div>Game draw! You can restart the game for a rematch.</div>;
    }
    return (
      <div>
        Current Move: {currentPlayer.name} ({currentPlayer.shape})
      </div>
    );
  };

  return <div className="game-stats">{renderContent()}</div>;
};

export default GameStats;

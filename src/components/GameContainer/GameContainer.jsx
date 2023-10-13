import React from "react";
import "./GameContainer.css";
import GameHeader from "../GameHeader/GameHeader";
import GameStats from "../GameStats/GameStats";
import GameGrid from "../GameGrid/GameGrid";
import GameFooter from "../GameFooter/GameFooter";
import { useAtom, useAtomValue } from "jotai";
import {
  gameGridAtom,
  gameMovesCountAtom,
  gameStatusAtom,
  initialGameStatus,
  initialGrid,
  initialMovesCount,
} from "../../store/atoms/game";
import { currentPlayerAtom } from "../../store/atoms/player";
import { checkGameStatus } from "../../helpers/gameChecker";
import { GAME_STATUS_IN_PROGRESS } from "../../constants";

const GameContainer = () => {
  const [gameGrid, setGameGrid] = useAtom(gameGridAtom);
  const [, setGameMovesCount] = useAtom(gameMovesCountAtom);
  const currentPlayer = useAtomValue(currentPlayerAtom);
  const [gameStatus, setGameStatus] = useAtom(gameStatusAtom);

  const handleTileClick = (e, tileIndex) => {
    if (gameGrid[tileIndex] === "" && gameStatus === GAME_STATUS_IN_PROGRESS) {
      const newGameGrid = gameGrid.map((item, index) => {
        if (index === tileIndex) {
          return currentPlayer.shape;
        }
        return item;
      });
      const newGameStatus = checkGameStatus(newGameGrid);
      if (newGameStatus === GAME_STATUS_IN_PROGRESS) {
        setGameMovesCount((count) => count + 1);
      }
      setGameGrid(newGameGrid);
      setGameStatus(newGameStatus);
    }
  };
  const handleGameRestart = (e) => {
    e.preventDefault();
    setGameGrid(initialGrid);
    setGameMovesCount(initialMovesCount);
    setGameStatus(initialGameStatus);
  };
  return (
    <div className="game-container">
      <GameHeader />
      <GameStats />
      <GameGrid handleTileClick={handleTileClick} />
      <GameFooter handleGameRestart={handleGameRestart} />
    </div>
  );
};

export default GameContainer;

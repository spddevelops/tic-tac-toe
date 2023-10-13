import React from "react";
import "./GameGrid.css";
import { useAtomValue } from "jotai";
import { gameGridAtom } from "../../store/atoms/game";

const GameGrid = ({ handleTileClick }) => {
  const gameGrid = useAtomValue(gameGridAtom);
  return (
    <div className="game-grid">
      {gameGrid.map((gridItem, index) => {
        return (
          <div
            key={index}
            className="game-grid-cell"
            onClick={(e) => {
              handleTileClick(e, index);
            }}
          >
            {gridItem}
          </div>
        );
      })}
    </div>
  );
};

export default GameGrid;

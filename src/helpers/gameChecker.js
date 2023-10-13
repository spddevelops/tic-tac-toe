import { GAME_STATUS_DRAW, GAME_STATUS_IN_PROGRESS, GAME_STATUS_WON } from "../constants";

export const checkGameStatus = (grid) => {
  const validMoves = ["X", "O"];
  let isGameWon = false;
  // check horizontal rows
  for(let i=0; i<3; i++){
    let j = i * 3;
    if(validMoves.includes(grid[j]) && grid[j] === grid[j+1] && grid[j+1] === grid[j+2]){
      isGameWon = true;
      break;
    }
  }
  // check vertical columns
  for(let i=0; i<3 && !isGameWon; i++){
    if(validMoves.includes(grid[i]) && grid[i] === grid[i+3] && grid[i+3] === grid[i+6]){
      isGameWon = true;
      break;
    }
  }
  // check diagonals
  if(validMoves.includes(grid[0]) && grid[0] === grid[4] && grid[4] === grid[8]){
    isGameWon = true;
  }
  if(validMoves.includes(grid[2]) && grid[2] === grid[4] && grid[4] === grid[6]){
    isGameWon = true;
  }
  if(isGameWon){
    return GAME_STATUS_WON;
  }
  // check if any empty cell is present or not
  if(grid.some((item) => item === "")){
    return GAME_STATUS_IN_PROGRESS;
  }
  return GAME_STATUS_DRAW;
}
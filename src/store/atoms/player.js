import { atom } from "jotai";
import { gameMovesCountAtom } from "./game";

const players = [
  {
    name: "Player 1",
    shape: "X",
  },
  {
    name: "Player 2",
    shape: "O",
  },
];
export const gamePlayersAtom = atom(players);

export const currentPlayerAtom = atom((get) => {
  const index = get(gameMovesCountAtom) % 2;
  return get(gamePlayersAtom)[index];
});

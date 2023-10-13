import { atom } from "jotai";
import { GAME_STATUS_IN_PROGRESS } from "../../constants";

export const initialGrid = ["", "", "", "", "", "", "", "", ""];
export const gameGridAtom = atom(initialGrid);

export const initialMovesCount = 0;
export const gameMovesCountAtom = atom(initialMovesCount);

export const initialGameStatus = GAME_STATUS_IN_PROGRESS;
export const gameStatusAtom = atom(initialGameStatus);

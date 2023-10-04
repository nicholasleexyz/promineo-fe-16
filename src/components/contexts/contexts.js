import { useContext } from "react";
import { PuzzlesContext } from "./PuzzlesContextProvider";
import { BoardContext } from "./BoardContextProvider";
import { PuzzleIndexContext } from "./PuzzleIndexContextProvider";
import { GameContext } from "./GameContextProvider";
import { SolvedContext } from "./SolvedContextProvider";

export function usePuzzlesContext() {
  const puzzlesContext = useContext(PuzzlesContext);
  if (!puzzlesContext) {
    throw new Error(
      "Puzzles Context should be used within Puzzles Context Provider"
    );
  }
  return puzzlesContext;
}

export function useBoardContext() {
  const boardContext = useContext(BoardContext);
  if (!boardContext) {
    throw new Error(
      "Board Context should be used within Board Context Provider"
    );
  }
  return boardContext;
}

export function usePuzzleIndexContext() {
  const puzzleIndexContext = useContext(PuzzleIndexContext);
  if (!puzzleIndexContext) {
    throw new Error(
      "Puzzle Index Context should be used within Puzzle Index Context Provider"
    );
  }
  return puzzleIndexContext;
}

export function useGameContext() {
  const gameContext = useContext(GameContext);
  if (!gameContext) {
    throw new Error(
      "Game Context should be used within Game Context Provider"
    );
  }
  return gameContext;
}

export function useSolvedContext() {
  const solvedContext = useContext(SolvedContext);
  if (!solvedContext) {
    throw new Error(
      "Solved Context should be used within Solved Context Provider"
    );
  }
  return solvedContext;
}
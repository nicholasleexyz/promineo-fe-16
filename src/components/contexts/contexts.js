import { useContext } from "react";
import { PuzzlesContext } from "./PuzzlesContextProvider";
import { BoardContext } from "./BoardContextProvider";
import { PuzzleIndexContext } from "./PuzzleIndexContextProvider";

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
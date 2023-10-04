import { useEffect } from "react";
import {
  useBoardContext,
  usePuzzleIndexContext,
  usePuzzlesContext,
} from "../contexts/contexts";
import SudokuGrid from "./SudokuGrid";
import { PropTypes } from "prop-types";

export default function SudokuGridGame() {
  // const { board } = useBoardContext();

  // useEffect(() => {
  // nameInputRef.current.value = puzzles[puzzleIndex].name;
  // console.log(puzzles);
  // }, [puzzles]);

  return (
    <>
      <SudokuGrid />
    </>
  );
}

SudokuGridGame.propTypes = {
  initCells: PropTypes.arrayOf(PropTypes.number),
};

import { useEffect, useRef } from "react";
import {
  useBoardContext,
  usePuzzleIndexContext,
  usePuzzlesContext,
} from "../contexts/contexts";
import SudokuGrid from "./SudokuGrid";
import { PropTypes } from "prop-types";

export default function SudokuGridSandbox() {
  const { puzzleIndex, setPuzzleIndex } = usePuzzleIndexContext();
  const { puzzles, setPuzzles } = usePuzzlesContext();
  const { board } = useBoardContext();
  const nameInputRef = useRef();

  useEffect(() => {
    nameInputRef.current.value = puzzles[puzzleIndex].name;
  }, [puzzles, puzzleIndex]);

  function handleSave() {
    const entry = {
      id: puzzles[puzzleIndex].id,
      name: nameInputRef.current.value,
      puzzle: board,
    };

    const updatedPuzzles = puzzles.map((p) => (p.id == entry.id ? entry : p));
    setPuzzles(updatedPuzzles);
  }

  function handleDelete() {
    if (puzzles.length > 1) {
      const updatedPuzzles = puzzles.filter(
        (p) => p.id !== puzzles[puzzleIndex].id
      );
      setPuzzles(updatedPuzzles);

      setPuzzleIndex((a) => a % updatedPuzzles.length);
    }
  }

  return (
    <>
      <SudokuGrid
        extButtons={
          <>
            <input
              type="text"
              placeholder="Edit Puzzle Name"
              className="input input-bordered text-base-content col-span-2"
              ref={nameInputRef}
            />
            <div className="btn btn-success" onClick={handleSave}>
              Save Changes
            </div>
            <div className="btn btn-error" onClick={handleDelete}>
              Delete
            </div>
          </>
        }
      />
    </>
  );
}

SudokuGridSandbox.propTypes = {
  initCells: PropTypes.arrayOf(PropTypes.number),
};

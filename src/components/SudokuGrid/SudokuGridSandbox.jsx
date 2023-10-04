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
    const sanitize = (str) => str.replace(/[^a-z0-9]/gi, "").slice(0, 16);
    const entry = {
      id: puzzles[puzzleIndex].id,
      name: sanitize(nameInputRef.current.value),
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
  function handleCreate() {
    console.log("create");
  }

  return (
    <>
      <SudokuGrid
        extButtons={
          <>
            <input
              type="text"
              placeholder="(max 16 characters)"
              className="input input-bordered text-base-content col-span-2"
              ref={nameInputRef}
            />
            <div className="btn btn-success" onClick={handleSave}>
              Save Changes
            </div>
            <div className="btn btn-warning" onClick={handleCreate}>
              Create
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

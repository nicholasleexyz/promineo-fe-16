import { PropTypes } from "prop-types";
import {
  useBoardContext,
  usePuzzleIndexContext,
  usePuzzlesContext,
} from "../contexts/contexts";
import { useEffect } from "react";

export function PuzzleEntryButton({ index }) {
  const { board, setBoard } = useBoardContext();
  const { puzzles, setPuzzles } = usePuzzlesContext();
  const { puzzleIndex, setPuzzleIndex } = usePuzzleIndexContext();

  useEffect(() => {
    console.log(puzzles);
  }, [puzzles]);

  const handleClick = () => {
    setPuzzleIndex(index);
    setBoard(puzzles[index].puzzle);
  };

  return (
    <div
      className="btn btn-primary w-full my-1 rounded-md p-2 flex justify-center items-center"
      onClick={handleClick}
    >
      {puzzles[index].name}
    </div>
  );
}

PuzzleEntryButton.propTypes = {
  index: PropTypes.number,
};

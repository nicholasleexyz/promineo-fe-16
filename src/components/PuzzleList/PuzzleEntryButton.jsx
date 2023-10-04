import { PropTypes } from "prop-types";
import {
  useBoardContext,
  usePuzzleIndexContext,
  usePuzzlesContext,
} from "../contexts/contexts";

export function PuzzleEntryButton({ index }) {
  const { setBoard } = useBoardContext();
  const { puzzles } = usePuzzlesContext();
  const { puzzleIndex, setPuzzleIndex } = usePuzzleIndexContext();

  const handleClick = () => {
    setPuzzleIndex(index);
    setBoard(puzzles[index].puzzle);
  };

  return (
    <div
      className={`btn w-full my-1 rounded-md p-2 flex justify-center items-center ${
        index == puzzleIndex ? "btn-primary" : "btn-secondary"
      }`}
      onClick={handleClick}
    >
      {puzzles[index].name}
    </div>
  );
}

PuzzleEntryButton.propTypes = {
  index: PropTypes.number,
};

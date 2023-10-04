import { PropTypes } from "prop-types";
import {
  useBoardContext,
  useGameContext,
  usePuzzleIndexContext,
  usePuzzlesContext,
} from "../contexts/contexts";

export default function SudokuCell({ index, isAdding }) {
  const { puzzles } = usePuzzlesContext();
  const { puzzleIndex } = usePuzzleIndexContext();
  const { board, setBoard } = useBoardContext();
  const { game } = useGameContext();

  const value = board[index];
  const locked = game && !!puzzles[puzzleIndex].puzzle[index];

  const handleClick = () => {
    if (!locked) {
      setBoard((a) =>
        a.map((cell, i) =>
          i == index ? (isAdding ? (cell + 1) % 10 : (cell + 9) % 10) : cell
        )
      );
    }
  };

  return (
    <div
      className={`${locked ? "bg-neutral" : "hover:bg-accent"} ${
        !game && "bg-secondary"
      } min-h-fit min-w-fit flex aspect-square justify-center items-center border-2 border-neutral text-neutral-content select-none`}
      onClick={handleClick}
    >
      {!!value && value}
    </div>
  );
}

SudokuCell.propTypes = {
  value: PropTypes.number,
  index: PropTypes.number,
  setCurrentCells: PropTypes.func,
  isAdding: PropTypes.bool,
};

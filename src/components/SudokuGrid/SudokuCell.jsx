import { PropTypes } from "prop-types";
import {
  useBoardContext,
  useGameContext,
  usePuzzleIndexContext,
  usePuzzlesContext,
  useSolvedContext,
} from "../contexts/contexts";

export default function SudokuCell({ index, isAdding }) {
  const { puzzles } = usePuzzlesContext();
  const { puzzleIndex } = usePuzzleIndexContext();
  const { board, setBoard } = useBoardContext();
  const { game } = useGameContext();
  const { solved } = useSolvedContext();

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

  function getBackgroundColor() {
    let bg = "";
    const s = solved.includes(index);
    if (locked && s) {
      bg = "bg-success text-warning";
    } else if (locked) {
      bg = "bg-neutral";
    } else if (s) {
      bg = "bg-success";
    } else if (!game) {
      bg = "bg-secondary hover:bg-primary";
    } else if (!s) {
      bg = "bg-primary hover:bg-accent";
    }

    return bg;
  }

  return (
    <div
      className={`${getBackgroundColor()} min-h-fit min-w-fit flex aspect-square justify-center items-center border-2 border-neutral text-neutral-content select-none`}
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

import { PropTypes } from "prop-types";
import { useBoardContext } from "../contexts/contexts";

export default function SudokuCell({ index, isAdding }) {
  const { board, setBoard } = useBoardContext();
  const value = board[index];

  const handleClick = () =>
    setBoard((a) =>
      a.map((cell, i) =>
        i == index ? (isAdding ? (cell + 1) % 10 : (cell + 9) % 10) : cell
      )
    );

  return (
    <div
      className="min-h-fit min-w-fit flex aspect-square justify-center items-center border-2 border-neutral text-neutral-content select-none hover:bg-accent"
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

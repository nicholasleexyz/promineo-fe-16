import { PropTypes } from "prop-types";

export default function SudokuCell({
  value,
  index,
  setCurrentCells,
  isAdding,
}) {
  return (
    <div
      className="min-h-fit min-w-fit flex aspect-square justify-center items-center border-2 border-neutral text-neutral-content select-none"
      onClick={() =>
        setCurrentCells((a) =>
          a.map((cell, i) => {
            return i == index
              ? isAdding
                ? (cell + 1) % 10
                : (cell + 9) % 10
              : cell;
          })
        )
      }
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

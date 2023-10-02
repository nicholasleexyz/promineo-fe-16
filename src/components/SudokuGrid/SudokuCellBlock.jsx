import { PropTypes } from "prop-types";
import SudokuCell from "./SudokuCell";
import { blocks } from "./sudokuBlocks";

export default function SudokuCellBlock({
  i,
  currentCells,
  setCurrentCells,
  isAdding,
}) {
  return (
    <div className="grid grid-cols-3 bg-primary aspect-square min-w-fit min-h-fit sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {blocks[i].map((cell, j) => (
        <SudokuCell
          key={i * 9 + j}
          value={currentCells[i * 9 + j]}
          index={i * 9 + j}
          setCurrentCells={setCurrentCells}
          isAdding={isAdding}
        />
      ))}
    </div>
  );
}

SudokuCellBlock.propTypes = {
  i: PropTypes.number,
  currentCells: PropTypes.arrayOf(PropTypes.number),
  setCurrentCells: PropTypes.func,
  isAdding: PropTypes.bool,
};

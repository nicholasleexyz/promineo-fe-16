import { PropTypes } from "prop-types";
import SudokuCell from "./SudokuCell";
import { blocks } from "./sudokuBlocks";

export default function SudokuCellBlock({ i, cells, isAdding }) {
  return (
    <div className="grid grid-cols-3 bg-primary aspect-square min-w-fit min-h-fit sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {blocks[i].map((cell, j) => (
        <SudokuCell
          key={i * 9 + j}
          value={cells[i * 9 + j]}
          isAdding={isAdding}
        />
      ))}
    </div>
  );
}

SudokuCellBlock.propTypes = {
  i: PropTypes.number,
  cells: PropTypes.arrayOf(PropTypes.number),
  isAdding: PropTypes.bool,
};

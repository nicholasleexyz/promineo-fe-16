import { PropTypes } from "prop-types";
import SudokuCell from "./SudokuCell";
import { blocks } from "./sudokuBlocks";

export default function SudokuCellBlock({ i, isAdding }) {
  // super sophisticated conversion algorithm :P
  const indexConversion = [
    0, 1, 2, 9, 10, 11, 18, 19, 20, 3, 4, 5, 12, 13, 14, 21, 22, 23, 6, 7, 8,
    15, 16, 17, 24, 25, 26, 27, 28, 29, 36, 37, 38, 45, 46, 47, 30, 31, 32, 39,
    40, 41, 48, 49, 50, 33, 34, 35, 42, 43, 44, 51, 52, 53, 54, 55, 56, 63, 64,
    65, 72, 73, 74, 57, 58, 59, 66, 67, 68, 75, 76, 77, 60, 61, 62, 69, 70, 71,
    78, 79, 80,
  ];

  return (
    <div className="grid grid-cols-3 bg-primary aspect-square min-w-fit min-h-fit sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {blocks[i].map((cell, j) => (
        // <SudokuCell key={i * 9 + j} index={i * 9 + j} isAdding={isAdding} />
        <SudokuCell
          key={i * 9 + j}
          index={indexConversion[i * 9 + j]}
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

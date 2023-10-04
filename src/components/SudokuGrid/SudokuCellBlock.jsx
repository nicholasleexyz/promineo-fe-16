import { PropTypes } from "prop-types";
import SudokuCell from "./SudokuCell";
import { blocks } from "./sudokuBlocks";

export default function SudokuCellBlock({ i, isAdding }) {
  // Just for funzies and to make life more interesting if it breaks :P
  const indexConversion = [...Array(81).keys()].map((i) => {
    const row = Math.floor(i / 9);
    const offset = (Math.floor(i / 3) * 9) % 27;
    const step = row * 3;
    return offset + (((i % 3) + step) % 3) + step + Math.floor(row / 3) * 18;
  });

  return (
    <div className="grid grid-cols-3 bg-primary aspect-square min-w-fit min-h-fit sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {blocks[i].map((cell, j) => (
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

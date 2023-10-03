import { useState } from "react";
import PlusAndMinus from "./PlusAndMinusButtons";
import SudokuCellBlock from "./SudokuCellBlock";
import { blocks } from "./sudokuBlocks";
import { PropTypes } from "prop-types";

export default function SudokuGrid({
  currentCells,
  setCurrentCells,
  extButtons,
}) {
  const [isAdding, setIsAdding] = useState(true);

  return (
    <div className="col-span-3 w-full sm:w-3/4 lg:w-1/2 h-fit m-auto">
      <div className="grid grid-cols-3">
        <PlusAndMinus isAdding={isAdding} setIsAdding={setIsAdding} />
        <h1 className="flex items-center justify-center text-white align-middle text-lg col-span-2 mb-1 rounded-full bg-secondary">
          New Puzzle Name
        </h1>
      </div>

      <div className="aspect-square grid grid-cols-3 gap-1 p-1 rounded-md bg-secondary mb-4">
        {blocks.map((block, i) => (
          <SudokuCellBlock
            key={i}
            i={i}
            currentCells={currentCells}
            setCurrentCells={setCurrentCells}
            isAdding={isAdding}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">{extButtons}</div>
    </div>
  );
}

SudokuGrid.propTypes = {
  currentCells: PropTypes.arrayOf(PropTypes.number),
  setCurrentCells: PropTypes.func,
  extButtons: PropTypes.element,
};

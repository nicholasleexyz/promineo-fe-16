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
    <div className="w-full sm:w-1/2 2xl:w-1/3">
      <div className="aspect-square grid grid-cols-3 gap-1 p-1 rounded-md bg-secondary">
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
      <div className="flex justify-start my-4 flex-wrap">
        <PlusAndMinus isAdding={isAdding} setIsAdding={setIsAdding} />
        {extButtons}
      </div>
    </div>
  );
}

SudokuGrid.propTypes = {
  currentCells: PropTypes.arrayOf(PropTypes.number),
  setCurrentCells: PropTypes.func,
  extButtons: PropTypes.element,
};

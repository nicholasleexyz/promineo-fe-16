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
    // <div className="flex justify-center flex-col h-full bg-red-500">
    <>
      <div className="col-span-3 w-full sm:w-3/4 lg:w-1/2 h-fit m-auto">
        <h1 className="w-full text-center text-lg py-2 text-white">
          Puzzle Name
        </h1>
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
        <div className="flex flex-wrap">
          <PlusAndMinus isAdding={isAdding} setIsAdding={setIsAdding} />
          {extButtons}
        </div>
      </div>
    </>
  );
}

SudokuGrid.propTypes = {
  currentCells: PropTypes.arrayOf(PropTypes.number),
  setCurrentCells: PropTypes.func,
  extButtons: PropTypes.element,
};

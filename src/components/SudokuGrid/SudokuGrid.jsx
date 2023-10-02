import { useEffect, useState } from "react";
import PlusAndMinus from "./PlusAndMinusButtons";
import SudokuCellBlock from "./SudokuCellBlock";
import { blocks } from "./sudokuBlocks";
import { PropTypes } from "prop-types";

export function SudokuGridSandbox({ initCells }) {
  const [currentCells, setCurrentCells] = useState(initCells);

  useEffect(() => {
    console.log(currentCells);
  }, [currentCells]);

  return (
    <>
      <SudokuGrid
        currentCells={currentCells}
        setCurrentCells={setCurrentCells}
        extButtons={
          <div className="flex gap-4">
            <div className="btn btn-success">Save Changes</div>
            <div className="btn btn-error">Delete</div>
          </div>
        }
      ></SudokuGrid>
    </>
  );
}

SudokuGridSandbox.propTypes = {
  initCells: PropTypes.arrayOf(PropTypes.number),
};

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
      <div className="flex justify-around my-4">
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

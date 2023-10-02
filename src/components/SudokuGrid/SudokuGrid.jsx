import { useEffect, useState } from "react";
import PlusAndMinus from "./PlusAndMinusButtons";
import SudokuCellBlock from "./SudokuCellBlock";
import { blocks } from "./sudokuBlocks";
import { PropTypes } from "prop-types";

export function SudokuGridSandbox({ cells }) {
  const [currentCells, setCurrentCells] = useState(cells);

  useEffect(() => {
    console.log(currentCells);
  }, [currentCells]);

  return (
    <>
      <SudokuGrid
        currentCells={currentCells}
        setCurrentCells={setCurrentCells}
      ></SudokuGrid>
    </>
  );
}

SudokuGridSandbox.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.number),
};

export default function SudokuGrid({ currentCells, setCurrentCells }) {
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
      <PlusAndMinus isAdding={isAdding} setIsAdding={setIsAdding} />
    </div>
  );
}

SudokuGrid.propTypes = {
  currentCells: PropTypes.arrayOf(PropTypes.number),
  setCurrentCells: PropTypes.func,
};

import { useState } from "react";
import PlusAndMinus from "./PlusAndMinusButtons";
import SudokuCellBlock from "./SudokuCellBlock";
import { blocks } from "./sudokuBlocks";
import { PropTypes } from "prop-types";
import { usePuzzleIndexContext, usePuzzlesContext } from "../contexts/contexts";

export default function SudokuGrid({ extButtons }) {
  const [isAdding, setIsAdding] = useState(true);

  const { puzzles } = usePuzzlesContext();
  const { puzzleIndex } = usePuzzleIndexContext();

  return (
    <div className="col-span-3 w-full sm:w-3/4 lg:w-1/2 h-fit m-auto">
      <div className="grid grid-cols-3">
        <PlusAndMinus isAdding={isAdding} setIsAdding={setIsAdding} />
        <h1 className="flex items-center justify-center text-accent-content align-middle text-lg col-span-2 mb-1 rounded-lg bg-accent">
          {puzzles[puzzleIndex].name}
        </h1>
      </div>

      <div className="aspect-square grid grid-cols-3 gap-1 p-1 rounded-md bg-secondary mb-4">
        {blocks.map((block, i) => (
          <SudokuCellBlock key={i} i={i} isAdding={isAdding} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">{extButtons}</div>
    </div>
  );
}

SudokuGrid.propTypes = {
  extButtons: PropTypes.element,
};

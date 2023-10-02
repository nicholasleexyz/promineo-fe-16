import PlusAndMinus from "../PlusAndMinusButtons";
import SudokuCellBlock from "./SudokuCellBlock";
import { blocks } from "./sudokuBlocks";
import { PropTypes } from "prop-types";

export default function SudokuGrid({ cells }) {
  return (
    <div className="w-full sm:w-1/2 2xl:w-1/3">
      <div className="aspect-square grid grid-cols-3 gap-1 p-1 rounded-md bg-secondary">
        {blocks.map((block, i) => (
          <SudokuCellBlock key={i} i={i} cells={cells} />
        ))}
      </div>
      <PlusAndMinus />
    </div>
  );
}

SudokuGrid.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.number),
};

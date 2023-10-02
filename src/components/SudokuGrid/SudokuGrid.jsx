import SudokuCellBlock from "./SudokuCellBlock";
import { blocks } from "./sudokuBlocks";

export default function SudokuGrid() {
  return (
    <div className="w-full sm:w-3/4 2xl:w-1/2 aspect-square grid grid-cols-3 gap-1 bg-secondary p-1 rounded-md">
      {blocks.map((block, i) => (
        <SudokuCellBlock key={i} i={i} />
      ))}
    </div>
  );
}

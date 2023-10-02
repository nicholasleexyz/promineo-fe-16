import SudokuCellBlock from "./SudokuCellBlock";
import { blocks } from "./sudokuBlocks";

export default function SudokuGrid() {
  return (
    <div className="w-1/2 aspect-square min-w-fit min-h-fit grid grid-cols-3 gap-1 p-2 rounded-lg bg-secondary">
      {blocks.map((block, i) => (
        <SudokuCellBlock key={i} i={i} />
      ))}
    </div>
  );
}

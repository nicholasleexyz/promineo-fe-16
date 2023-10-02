import SudokuCellBlock from "./SudokuCellBlock";
import { blocks } from "./sudokuBlocks";

export default function SudokuGrid() {
  return (
    <div className="w-full md:w-3/4 xl:w-1/2 max-xl:h-1/3 aspect-square min-w-fit min-h-fit grid grid-cols-3 gap-1 p-2 rounded-lg bg-secondary object-scale-down">
      {blocks.map((block, i) => (
        <SudokuCellBlock key={i} i={i} />
      ))}
    </div>
  );
}

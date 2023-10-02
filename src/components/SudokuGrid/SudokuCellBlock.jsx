import SudokuCell from "./SudokuCell";
import { blocks, cells } from "./sudokuBlocks";

export default function SudokuCellBlock({ i }) {
  return (
    <div className="grid grid-cols-3 bg-primary">
      {blocks[i].map((cell, j) => (
        <SudokuCell key={i * 9 + j} value={cells[i * 9 + j]} />
      ))}
    </div>
  );
}

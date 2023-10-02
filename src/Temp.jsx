import SudokuGrid from "./components/SudokuGrid/SudokuGrid";
import { cells } from "./components/SudokuGrid/sudokuBlocks";

export default function Temp() {
  return (
    <div className="flex justify-center items-start max-sm:mt-14 w-full ">
      <SudokuGrid cells={cells} />
    </div>
  );
}

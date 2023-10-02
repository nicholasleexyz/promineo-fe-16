import SudokuGrid from "./components/SudokuGrid/SudokuGrid";
import { cells } from "./components/SudokuGrid/sudokuBlocks";

export function SudokuGridSandbox() {
  return <></>;
}

export default function Temp() {
  return (
    <>
      <div className="grid grid-cols-1 w-full h-full justify-items-center place-content-center">
        <SudokuGrid cells={cells} />
      </div>
    </>
  );
}

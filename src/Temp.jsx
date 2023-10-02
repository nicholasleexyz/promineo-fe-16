import SudokuGrid from "./components/SudokuGrid/SudokuGrid";
import { cells } from "./components/SudokuGrid/sudokuBlocks";

export default function Temp() {
  return (
    <>
      <div className="grid grid-cols-1 w-full h-full justify-items-center place-content-center">
        <SudokuGrid cells={cells} />
        <div className="flex items-center w-1/2 mt-2 gap-4 ">
          <button className="btn btn-circle btn-primary text-xl text-neutral-content outline outline-2 outline-white">
            -
          </button>
          <button className="btn btn-circle btn-primary text-xl text-neutral-content">
            +
          </button>
        </div>
      </div>
    </>
  );
}

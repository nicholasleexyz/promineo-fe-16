import PuzzleList from "../components/PuzzleList/PuzzleList";
import SudokuGridSandbox from "../components/SudokuGrid/SudokuGridSandbox";

export default function Temp() {
  return (
    <>
      <div className="grid sm:grid-cols-4 w-full h-full sm:gap-4 grid-cols-1 justify-center">
        <SudokuGridSandbox initCells={Array(81).fill(1)} />
        <PuzzleList></PuzzleList>
      </div>
    </>
  );
}

import PuzzleList from "../components/PuzzleList/PuzzleList";
import SudokuGridSandbox from "../components/SudokuGrid/SudokuGridSandbox";

export default function Temp() {
  return (
    <>
      <div className="grid grid-cols-4 w-[calc(100%-2rem)] mx-4 h-full gap-4">
        <SudokuGridSandbox initCells={Array(81).fill(1)} />
        <PuzzleList></PuzzleList>
      </div>
    </>
  );
}

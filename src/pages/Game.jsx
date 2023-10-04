import PuzzleList from "../components/PuzzleList/PuzzleList";
import SudokuGridGame from "../components/SudokuGrid/SudokuGridGame";

export default function Game() {
  return (
    <>
      <div className="grid sm:grid-cols-4 w-full h-full sm:gap-4 grid-cols-1 justify-center">
        <SudokuGridGame />
        <PuzzleList></PuzzleList>
      </div>
    </>
  );
}

import PuzzleList from "../components/PuzzleList/PuzzleList";
import SudokuGridGame from "../components/SudokuGrid/SudokuGridGame";
import SolvedContextProvider from "../components/contexts/SolvedContextProvider";

export default function Game() {
  return (
    <>
      <SolvedContextProvider>
        <div className="grid sm:grid-cols-4 w-full h-full sm:gap-4 grid-cols-1 justify-center">
          <SudokuGridGame />
          <PuzzleList></PuzzleList>
        </div>
      </SolvedContextProvider>
    </>
  );
}

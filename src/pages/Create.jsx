import PuzzleList from "../components/PuzzleList/PuzzleList";
import SudokuGridSandbox from "../components/SudokuGrid/SudokuGridSandbox";
import SolvedContextProvider from "../components/contexts/SolvedContextProvider";

export default function Create() {
  return (
    <SolvedContextProvider>
      <div className="grid sm:grid-cols-4 w-full h-full sm:gap-4 grid-cols-1 justify-center">
        <SudokuGridSandbox />
        <PuzzleList></PuzzleList>
      </div>
    </SolvedContextProvider>
  );
}

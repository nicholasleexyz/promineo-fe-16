import { useBoardContext, useSolvedContext } from "../contexts/contexts";
import SudokuGrid from "./SudokuGrid";

export default function SudokuGridGame() {
  const { solved, setSolved } = useSolvedContext();
  const { board, setBoard } = useBoardContext();

  return (
    <>
      <SudokuGrid />
    </>
  );
}

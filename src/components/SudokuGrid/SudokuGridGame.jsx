import { useEffect } from "react";
import { useBoardContext, useSolvedContext } from "../contexts/contexts";
import SudokuGrid from "./SudokuGrid";

export default function SudokuGridGame() {
  const { solved, setSolved } = useSolvedContext();
  const { board, setBoard } = useBoardContext();

  useEffect(() => {
    // const columns = [...Array(9).keys()].map(i => board)
    // setSolved([...Array(81).keys()].filter((i) => !!(i % 9)));
  }, []);

  return (
    <>
      <SudokuGrid />
    </>
  );
}

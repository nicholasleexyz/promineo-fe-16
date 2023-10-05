import { useEffect } from "react";
import { useBoardContext, useSolvedContext } from "../contexts/contexts";
import SudokuGrid from "./SudokuGrid";

export default function SudokuGridGame() {
  const { solved, setSolved } = useSolvedContext();
  const { board, setBoard } = useBoardContext();

  useEffect(() => {
    const rows = [...Array(9).keys()].map((j) =>
      [...Array(9).keys()].map(
        (i) =>
          board.filter((cell) => cell !== 0).map((cell) => cell % 9)[j * 9 + i]
      )
    );
    //row check
    const rowCheck = (row) => [...new Set(row)].length == 9;
    const solvedRows = rows.map(rowCheck);
    console.log(solvedRows);
    setSolved(rows.filter((row, i) => solvedRows[i]).flat());
    //set solved based on flat index

    console.log(rows);
    // const columns = [...Array(9).keys()].map((i) => board);

    // console.log(s);
    // setSolved(s);
  }, [board]);

  return (
    <>
      <SudokuGrid />
    </>
  );
}

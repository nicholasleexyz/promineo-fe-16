import { useEffect } from "react";
import { useBoardContext, useSolvedContext } from "../contexts/contexts";
import SudokuGrid from "./SudokuGrid";

export default function SudokuGridGame() {
  const { solved, setSolved } = useSolvedContext();
  const { board, setBoard } = useBoardContext();

  useEffect(() => {
    setBoard([...Array(81).keys()].map((i) => i % 9));
  }, []);

  useEffect(() => {
    const rows = [...Array(9).keys()].map((j) =>
      [...Array(9).keys()].map((i) => board[j * 9 + i])
    );
    // console.log(rows);
    //row check
    const rowCheck = (row) => [...new Set(row)].length == 9;
    const solvedRows = rows.map(rowCheck);
    // console.log(solvedRows);

    // const s = rows.filter((r, i) => solvedRows[i])
    const zip = rows.map((row, i) => [row, solvedRows[i]]);
    // console.log(zip);

    const s = zip
      .filter((pair) => pair[1])
      .map((pair) => pair[0])
      .flat();

    // const s = rows.filter((row, i) => solvedRows[i]).flat();
    console.log(s);
    setSolved(s);

    //set solved based on flat index

    // console.log(rows);
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

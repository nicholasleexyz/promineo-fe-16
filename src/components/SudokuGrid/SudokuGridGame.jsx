import { useEffect } from "react";
import { useBoardContext, useSolvedContext } from "../contexts/contexts";
import SudokuGrid from "./SudokuGrid";

export default function SudokuGridGame() {
  const { solved, setSolved } = useSolvedContext();
  const { board, setBoard } = useBoardContext();

  // useEffect(() => {
  // }, []);

  useEffect(() => {
    const getSolvedRows = () => {
      const rows = [...Array(9).keys()].map((j) =>
        [...Array(9).keys()].map((i) => j * 9 + i)
      );
      const rowCheck = (row) =>
        [...new Set(row.map((i) => board[i]).filter((c) => c !== 0))].length ==
        9;
      const s = rows.map(rowCheck);
      const zip = rows.map((row, i) => [row, s[i]]);

      return zip
        .filter((pair) => pair[1])
        .map((pair) => pair[0])
        .flat();
    };
    setSolved(getSolvedRows());

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

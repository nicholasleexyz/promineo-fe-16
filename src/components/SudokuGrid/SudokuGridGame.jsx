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

    const getSolvedColumns = () => {
      const columns = [...Array(9).keys()].map((j) =>
        [...Array(9).keys()].map((i) => i * 9 + j)
      );
      // console.log(columns);
      const columnCheck = (column) =>
        [...new Set(column.map((i) => board[i]).filter((c) => c !== 0))]
          .length == 9;

      const s = columns.map(columnCheck);
      const zip = columns.map((column, i) => [column, s[i]]);

      return zip
        .filter((pair) => pair[1])
        .map((pair) => pair[0])
        .flat();
    };

    const getSolvedBlocks = () => {
      // Just for funzies and to make life more interesting if it breaks :P
      const indexConversion = [...Array(81).keys()].map((i) => {
        const row = Math.floor(i / 9);
        const rowOffset = row * 3;

        return (
          ((Math.floor(i / 3) * 9) % 27) +
          rowOffset +
          Math.floor(row / 3) * 18 +
          (((i % 3) + rowOffset) % 3)
        );
      });

      const blocks = [...Array(9).keys()].map((j) =>
        [...Array(9).keys()].map((i) => indexConversion[j * 9 + i])
      );

      const blockCheck = (block) =>
        [...new Set(block.map((i) => board[i]).filter((c) => c !== 0))]
          .length == 9;

      const s = blocks.map(blockCheck);
      const zip = blocks.map((block, i) => [block, s[i]]);

      return zip
        .filter((pair) => pair[1])
        .map((pair) => pair[0])
        .flat();
    };

    const _solved = getSolvedColumns()
      .concat(getSolvedRows())
      .concat(getSolvedBlocks());

    setSolved(_solved);

    if (_solved.length == 243) {
      console.log("You solved the sudoku!");
    }
  }, [board, setSolved]);

  return (
    <>
      <SudokuGrid />
    </>
  );
}

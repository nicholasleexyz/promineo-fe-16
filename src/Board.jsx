import { useContext, useEffect, useState } from "react";
import Cell from "./Cell";
import { cellsContext } from "./Contexts";
import { initialPuzzleData } from "./initialPuzzles";

/**
 * Helper function for creating entries in puzzleDB
 * @param {Number} id
 * @param {String} puzzleName
 * @param {Number[][]} puzzle should be a 9x9 two dimensional array
 * @returns {{id: Number, name: String, puzzle: Number[][]}}
 */
function createPuzzleEntry(id, puzzleName, puzzle) {
  return { id: id, name: puzzleName, puzzle: puzzle };
}

export function Board() {
  const [solvedRows, setSolvedRows] = useState(Array(9).fill(false));
  const [solvedColumns, setSolvedColumns] = useState(Array(9).fill(false));
  const [solvedBlocks, setSolvedBlocks] = useState(Array(9).fill(false));
  const [cells, setCells] = useContext(cellsContext);

  const [lockedCells, setLockedCells] = useState([]);
  const [currentPuzzleName, setCurrentPuzzleName] = useState("");

  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);

  const puzzles = initialPuzzleData.map((puzzleData) =>
    createPuzzleEntry(puzzleData.id, puzzleData.name, puzzleData.puzzle)
  );

  useEffect(() => {
    setCurrentPuzzleName(puzzles[currentPuzzleIndex].name);
    setLockedCells(() => {
      return puzzles[currentPuzzleIndex].puzzle.map((c) => c != 0);
    });
    setCells(() => puzzles[currentPuzzleIndex].puzzle);
    setCurrentPuzzleName(() => puzzles[currentPuzzleIndex].name);
  }, [currentPuzzleIndex]);

  useEffect(() => {}, []);

  useEffect(() => {
    const rows = [...Array(9).keys()]
      .map((i) => i * 9)
      .map((j) => [...Array(9).keys()].map((k) => cells[k + j]));

    const r = Array(9).fill(false);
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if ([...new Set(row.filter((n) => n >= 1))].length == 9) {
        r[i] = true;
      }
    }
    setSolvedRows(r);

    const columns = [...Array(9).keys()].map((j) =>
      [...Array(9).keys()].map((i) => cells[i * 9 + j])
    );
    const c = Array(9).fill(false);
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      if ([...new Set(column.filter((n) => n >= 1))].length == 9) {
        c[i] = true;
      }
    }
    setSolvedColumns(c);

    const blocks = [...Array(9).keys()].map((i) =>
      [...Array(9).keys()].map(
        (j) =>
          cells[
            Math.floor(j / 3) * 9 + (j % 3) + i * 3 + Math.floor(i / 3) * 18
          ]
      )
    );

    const b = Array(9).fill(false);
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      if ([...new Set(block.filter((n) => n >= 1))].length == 9) {
        b[i] = true;
      }
    }
    setSolvedBlocks(b);
  }, [cells]);

  useEffect(() => {
    const blocksSolved = solvedBlocks.reduce((a, b) => a && b);
    const columnsSolved = solvedColumns.reduce((a, b) => a && b);
    const rowsSolved = solvedRows.reduce((a, b) => a && b);

    if (blocksSolved && columnsSolved && rowsSolved) {
      console.log("You Solved the Puzzle!");
    }
  }, [solvedBlocks, solvedColumns, solvedRows]);

  return (
    <>
      <div className="grid grid-cols-1 content-center">
        <div className="grid grid-cols-3">
          <button
            className="btn btn-primary mb-1.5"
            onClick={() =>
              setCurrentPuzzleIndex(
                (a) => (a - 1 + puzzles.length) % puzzles.length
              )
            }
          >
            Previous
          </button>
          <span className="flex justify-center items-center text-3xl mb-1.5">
            {currentPuzzleName}
          </span>
          <button
            className="btn btn-primary mb-1.5"
            onClick={() =>
              setCurrentPuzzleIndex((a) => (a + 1) % puzzles.length)
            }
          >
            Next
          </button>
        </div>
        <div className="board bg-gray-500">
          {[...Array(9).keys()].map((j) =>
            [...Array(9).keys()].map((i) => {
              return (
                <Cell
                  key={j * 9 + i}
                  index={j * 9 + i}
                  solved={
                    solvedRows[j] ||
                    solvedColumns[i] ||
                    solvedBlocks[Math.floor(i / 3) + Math.floor(j / 3) * 3]
                  }
                  locked={lockedCells[j * 9 + i]}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

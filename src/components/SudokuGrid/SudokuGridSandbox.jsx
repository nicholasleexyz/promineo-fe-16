import { useEffect, useState } from "react";
import SudokuGrid from "./SudokuGrid";
import { PropTypes } from "prop-types";

export default function SudokuGridSandbox({ initCells }) {
  const [currentCells, setCurrentCells] = useState(initCells);

  useEffect(() => {
    console.log(currentCells);
  }, [currentCells]);

  return (
    <>
      <SudokuGrid
        currentCells={currentCells}
        setCurrentCells={setCurrentCells}
        extButtons={
          // <div className="flex gap-4 bg-green-500">
          <>
            <input
              type="text"
              placeholder="Edit Puzzle Name"
              className="input input-bordered text-base-content col-span-2"
            />
            <div className="btn btn-success">Save Changes</div>
            <div className="btn btn-error">Delete</div>
          </>
        }
      />
    </>
  );
}

SudokuGridSandbox.propTypes = {
  initCells: PropTypes.arrayOf(PropTypes.number),
};

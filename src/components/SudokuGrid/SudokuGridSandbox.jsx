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
              className="input input-bordered w-1/2 min-w-fit text-info mb-4 mr-4"
            />
            <div className="btn btn-success mr-4">Save Changes</div>
            <div className="btn btn-error mr-4">Delete</div>
          </>
        }
      />
    </>
  );
}

SudokuGridSandbox.propTypes = {
  initCells: PropTypes.arrayOf(PropTypes.number),
};

import SudokuGrid from "./SudokuGrid";
import { PropTypes } from "prop-types";

export default function SudokuGridSandbox() {
  return (
    <>
      <SudokuGrid
        extButtons={
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

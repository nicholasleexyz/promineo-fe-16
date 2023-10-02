import SudokuGridSandbox from "./components/SudokuGrid/SudokuGridSandbox";
import { PropTypes } from "prop-types";

export function PuzzleList() {
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-[calc(100vh-9rem)] my-2 bg-neutral-content p-4 overflow-auto">
        {[...Array(100).keys()].map((i) => (
          <PuzzleEntryButton key={i} index={i} />
        ))}
      </div>
    </>
  );
}

export function PuzzleEntryButton({ index }) {
  return (
    <div className="btn btn-secondary w-full my-1 rounded-md p-2 flex justify-center items-center">
      puzzle {index}
    </div>
  );
}
PuzzleEntryButton.propTypes = {
  index: PropTypes.number,
};

export default function Temp() {
  return (
    <>
      <div className="grid grid-cols-4 w-[calc(100%-2rem)] mx-4 h-full">
        <SudokuGridSandbox initCells={Array(81).fill(1)} />
        <PuzzleList></PuzzleList>
      </div>
    </>
  );
}

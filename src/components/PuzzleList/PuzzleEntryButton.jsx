import { PropTypes } from "prop-types";

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

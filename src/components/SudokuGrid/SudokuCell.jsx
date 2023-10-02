import { PropTypes } from "prop-types";

export default function SudokuCell({ value }) {
  return (
    <div className="min-h-fit min-w-fit flex aspect-square justify-center items-center border-2 border-neutral text-neutral-content">
      {value}
    </div>
  );
}

SudokuCell.propTypes = {
  value: PropTypes.string,
};

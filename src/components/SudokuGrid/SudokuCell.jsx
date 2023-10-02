import { PropTypes } from "prop-types";
import { useState } from "react";

export default function SudokuCell({ value, isAdding }) {
  const [currentValue, setCurrentValue] = useState((value + 1) % 9);

  return (
    <div
      className="min-h-fit min-w-fit flex aspect-square justify-center items-center border-2 border-neutral text-neutral-content select-none"
      onClick={() =>
        setCurrentValue((a) => (isAdding ? (a + 1) % 10 : (a + 9) % 10))
      }
    >
      {!!currentValue && currentValue}
    </div>
  );
}

SudokuCell.propTypes = {
  value: PropTypes.number,
  isAdding: PropTypes.bool,
};

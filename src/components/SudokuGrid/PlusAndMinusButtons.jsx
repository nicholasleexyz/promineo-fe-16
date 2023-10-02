import { PropTypes } from "prop-types";

export default function PlusAndMinus({ isAdding, setIsAdding }) {
  return (
    <div className="flex items-center justify-start w-fit gap-2 mb-4 mr-8 ">
      <button
        className={`btn btn-circle btn-primary text-xl text-neutral-content ${
          !isAdding && "outline outline-2 outline-neutral-content"
        }`}
        onClick={() => setIsAdding(false)}
      >
        -
      </button>
      <button
        className={`btn btn-circle btn-primary text-xl text-neutral-content ${
          isAdding && "outline outline-2 outline-neutral-content"
        }`}
        onClick={() => setIsAdding(true)}
      >
        +
      </button>
    </div>
  );
}

PlusAndMinus.propTypes = {
  isAdding: PropTypes.bool,
  setIsAdding: PropTypes.func,
};

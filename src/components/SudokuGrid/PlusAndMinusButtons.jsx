import { PropTypes } from "prop-types";
import { useEffect } from "react";

export default function PlusAndMinus({ isAdding, setIsAdding }) {
  useEffect(() => {
    console.log("asdf");
    const plusKeys = ["ArrowRight", "+", "="];
    const minusKeys = ["ArrowLeft", "-", "_"];

    const handleKeyDown = (e) => {
      const key = e.key;

      if (!isAdding && plusKeys.some((k) => key == k)) {
        setIsAdding(true);
      } else if (isAdding && minusKeys.some((k) => key == k)) {
        setIsAdding(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAdding, setIsAdding]);

  return (
    <div className="flex items-center justify-start w-fit gap-2 mb-2 mr-8 ">
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

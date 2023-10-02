import { useState } from "react";

export default function PlusAndMinus() {
  const [isAdding, setIsAdding] = useState(true);

  return (
    <div className="flex items-center justify-start w-full my-2 gap-2 ">
      <button
        className={`btn btn-circle btn-primary text-xl text-neutral-content ${
          !isAdding && "outline outline-2 outline-white"
        }`}
        onClick={() => setIsAdding(false)}
      >
        -
      </button>
      <button
        className={`btn btn-circle btn-primary text-xl text-neutral-content ${
          isAdding && "outline outline-2 outline-white"
        }`}
        onClick={() => setIsAdding(true)}
      >
        +
      </button>
    </div>
  );
}

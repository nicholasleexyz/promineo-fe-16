import { useEffect, useState } from "react";

export function Create() {
  useEffect(() => {}, []);

  const [puzzles, setPuzzles] = useState([]);
  const [keys, setKeys] = useState([]);
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);

  useEffect(() => {
    setCurrentPuzzle(puzzles[currentPuzzleIndex]);
  }, [currentPuzzleIndex, puzzles]);

  useEffect(() => {
    const a = async () =>
      await fetch("./puzzles.json")
        .then((res) => res.json())
        .then((json) => {
          const _keys = Object.keys(json);
          const _puzzles = _keys.map((key) =>
            json[key].flat().map((n) => n - 1)
          );
          // console.log(_puzzles);
          setPuzzles(_puzzles);
          setKeys(_keys);
        });
    a();
  }, [setPuzzles]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap w-full justify-start">
        {/* list all of the currently available puzzles */}
        {/* be able to select one of the available puzzles */}
        {/* load in the currently selected puzzle to a board */}
        {/* have a board to represent the currently selected puzzle */}

        {/* board */}
        <div className="flex items-center flex-col justify-center w-fit">
          <span className="flex w-full items-center justify-center text-2xl uppercase text-info-content mt-8">
            {keys[currentPuzzleIndex]}
          </span>
          <div className="board bg-gray-500 self-center">
            {[...Array(81).keys()].map((i) => (
              <div
                key={i}
                className={`${
                  currentPuzzle && currentPuzzle[i] < 0
                    ? "bg-neutral-content"
                    : "bg-secondary-content"
                } w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 cell outline outline-gray-900 text-white`}

                // className={`outline-2 outline-gray-900 text-neutral outline ${
                //   !locked && "hover:bg-accent"
                // } cell ${
                //   solved
                //     ? locked
                //       ? "bg-secondary-focus"
                //       : "bg-success"
                //     : locked
                //     ? "bg-secondary-content text-neutral-content"
                //     : "bg-primary"
                // } ${
                //   locked && solved
                //     ? "bg-neutral-focus text-neutral-content"
                //     : "bg-neutral"
                // }`}
              >
                {currentPuzzle && !(currentPuzzle[i] < 0)
                  ? currentPuzzle[i] + 1
                  : ""}
              </div>
            ))}
          </div>

          <div className="flex w-full justify-end mt-2">
            <div className="btn btn-success">Save Changes</div>
            <div className="btn btn-error ml-4">Delete</div>
          </div>
        </div>

        <div className="m-4 self-center w-full h-96 overflow-auto bg-secondary-content xl:w-96">
          {puzzles.map((puzzle, i) => (
            <div
              key={i}
              className={`btn h-16 my-2 mx-1 text-white flex items-center
              ${i == currentPuzzleIndex ? "btn-primary" : "btn-secondary"}`}
              onClick={() => {
                setCurrentPuzzleIndex(i);
              }}
            >
              {keys[i]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

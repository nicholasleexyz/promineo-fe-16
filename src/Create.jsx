import { initialPuzzleData } from "./initialPuzzles";
import { useReducer, useState, useEffect } from "react";

/**
 * Helper function for creating entries in puzzleDB
 * @param {Number} id
 * @param {String} puzzleName
 * @param {Number[][]} puzzle should be a 9x9 two dimensional array
 * @returns {{id: Number, name: String, puzzle: Number[][]}}
 */
function createPuzzleEntry(id, puzzleName, puzzle) {
  return { id: id, name: puzzleName, puzzle: puzzle };
}

export function Create() {
  const ACTIONS_PUZZLE_REDUCER = {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
  };

  function puzzlesReducer(state, action) {
    switch (action.type) {
      case ACTIONS_PUZZLE_REDUCER.POST:
        return action.payload &&
          state.some((entry) => entry.id == action.payload.id)
          ? state
          : state.concat([action.payload]);
      case ACTIONS_PUZZLE_REDUCER.GET:
        return state.map((obj) =>
          createPuzzleEntry(obj.id, obj.name, obj.puzzle.flat())
        );
      case ACTIONS_PUZZLE_REDUCER.PUT:
        return state.map((entry) =>
          action.payload && entry.id == action.payload.id
            ? action.payload
            : entry
        );
      case ACTIONS_PUZZLE_REDUCER.DELETE:
        return state.filter((entry) => entry.id != action.payload.id);
      default:
        return state;
    }
  }

  const [puzzles, puzzlesDispatch] = useReducer(
    puzzlesReducer,
    initialPuzzleData
  );

  const [currentPuzzle, setCurrentPuzzle] = useState([]);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);

  useEffect(() => {
    puzzlesDispatch({ type: ACTIONS_PUZZLE_REDUCER.GET });
  }, []);

  useEffect(() => {
    setCurrentPuzzle(puzzles[currentPuzzleIndex].puzzle);
  }, [puzzles, currentPuzzleIndex]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap w-full justify-start">
        <div className="flex items-center flex-col justify-center w-fit">
          <span className="flex w-full items-center justify-center text-2xl uppercase text-info-content mt-8">
            {puzzles[currentPuzzleIndex].name}
          </span>
          <div className="board bg-gray-500 self-center">
            {[...Array(81).keys()].map((i) => (
              <div
                key={i}
                className={`${
                  puzzles[currentPuzzleIndex].puzzle[i] <= 0
                    ? "bg-neutral-content"
                    : "bg-secondary-content"
                } w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 cell outline outline-gray-900 text-gray-500`}
                onClick={() => {
                  setCurrentPuzzle(() =>
                    currentPuzzle.map((cell, j) =>
                      j == i ? (cell + 1 + 10) % 10 : cell
                    )
                  );
                }}
              >
                {currentPuzzle[i]}
              </div>
            ))}
          </div>

          <div className="flex w-full justify-end mt-2">
            <div
              className="btn btn-success"
              onClick={() => {
                const payload = {
                  ...puzzles[currentPuzzleIndex],
                  puzzle: currentPuzzle,
                };
                puzzlesDispatch({
                  type: ACTIONS_PUZZLE_REDUCER.PUT,
                  payload: payload,
                });
              }}
            >
              Save Changes
            </div>
            <div
              className="btn btn-error ml-4"
              onClick={() => {
                setCurrentPuzzleIndex(0);
                puzzles.length > 1 &&
                  puzzlesDispatch({
                    type: ACTIONS_PUZZLE_REDUCER.DELETE,
                    payload: {
                      ...puzzles[currentPuzzleIndex],
                      puzzle: currentPuzzle,
                    },
                  });
              }}
            >
              Delete
            </div>
          </div>
        </div>

        <div className="m-4 self-center w-full h-96 overflow-auto bg-secondary-content xl:w-96">
          {puzzles.map((puzzle, i) => (
            <div
              key={puzzle.id}
              className={`btn h-16 my-2 mx-1 text-white flex items-center
              ${i == currentPuzzleIndex ? "btn-primary" : "btn-secondary"}`}
              onClick={() => {
                setCurrentPuzzleIndex(i);
              }}
            >
              {puzzles[i].name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

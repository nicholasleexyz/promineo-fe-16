import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const PuzzleIndexContext = createContext(null);

export default function PuzzleIndexContextProvider({ children }) {
  const [puzzleIndex, setPuzzleIndex] = useState(0);

  return (
    <PuzzleIndexContext.Provider value={{ puzzleIndex, setPuzzleIndex }}>
      {children}
    </PuzzleIndexContext.Provider>
  );
}

PuzzleIndexContextProvider.propTypes = {
  children: PropTypes.element,
};

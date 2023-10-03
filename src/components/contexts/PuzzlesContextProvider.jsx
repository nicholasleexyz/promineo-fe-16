import { createContext, useState } from "react";
import { initialPuzzleData } from "../../initialPuzzles";
import { PropTypes } from "prop-types";

export const PuzzlesContext = createContext(null);

export default function PuzzlesContextProvider({ children }) {
  const [puzzles, setPuzzles] = useState(initialPuzzleData);

  return (
    <PuzzlesContext.Provider value={{ puzzles, setPuzzles }}>
      {children}
    </PuzzlesContext.Provider>
  );
}

PuzzlesContextProvider.propTypes = {
  children: PropTypes.element,
};

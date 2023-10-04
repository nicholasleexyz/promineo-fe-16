import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const GameContext = createContext(null);

export default function GameContextProvider({ children }) {
  const [game, setGame] = useState(true);

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: PropTypes.element,
};

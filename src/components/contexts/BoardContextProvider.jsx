import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const BoardContext = createContext(null);

export default function BoardContextProvider({ children }) {
  const [board, setBoard] = useState([...Array(81).keys()]);

  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      {children}
    </BoardContext.Provider>
  );
}

BoardContextProvider.propTypes = {
  children: PropTypes.element,
};

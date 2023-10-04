import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const SolvedContext = createContext(null);

export default function SolvedContextProvider({ children }) {
  const [solved, setSolved] = useState([]);

  return (
    <SolvedContext.Provider value={{ solved, setSolved }}>
      {children}
    </SolvedContext.Provider>
  );
}

SolvedContextProvider.propTypes = {
  children: PropTypes.element,
};

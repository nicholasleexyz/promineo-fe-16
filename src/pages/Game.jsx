import { useState } from "react";
import { Board } from "../Board";
import { cellsContext } from "../Contexts";

const init = Array(81).fill(-1);

export function Game() {
  const [cells, setCells] = useState(init);

  return (
    <cellsContext.Provider value={[cells, setCells]}>
      <div className="content">
        <div className="banner bg-accent text-neutral">SUDOKU</div>
        <div className="board-wrapper">
          <Board />
        </div>
      </div>
    </cellsContext.Provider>
  );
}

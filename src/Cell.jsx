import { useContext } from "react";
import { cellsContext } from "./Contexts";

// eslint-disable-next-line react/prop-types
export default function Cell({ index, solved, locked }) {
  const [cells, setCells] = useContext(cellsContext);
  const val = cells[index];

  function asdf() {
    if (!locked) {
      const a = [];
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const b = i == index ? (cell + 1) % 10 : cell;
        a.push(b);
      }
      setCells(a);
    }
  }

  return (
    <div
      className={`outline-2 outline-gray-900 text-neutral outline ${
        !locked && "hover:bg-accent"
      } cell ${
        solved
          ? locked
            ? "bg-secondary-focus"
            : "bg-success"
          : locked
          ? "bg-secondary-content text-neutral-content"
          : "bg-primary"
      } ${
        locked && solved
          ? "bg-neutral-focus text-neutral-content"
          : "bg-neutral"
      }`}
      onClick={asdf}
    >
      {val == 0 ? "" : val}
    </div>
  );
}

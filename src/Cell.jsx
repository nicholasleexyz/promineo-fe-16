import { useContext } from "react";
import { cellsContext } from "./Contexts";

// eslint-disable-next-line react/prop-types
export default function Cell({ index, solved, locked }) {
  const [cells, setCells] = useContext(cellsContext);
  const val = cells[index];
  // const row = [...Array(9).keys()].map((i) => cells[i + (index - (index % 9))]);

  // useEffect(() => {
  //   console.log(row);
  // }, [row]);

  function asdf() {
    if (!locked) {
      const a = [];
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const b = i == index ? (cell + 1) % 9 : cell;
        a.push(b);
      }
      setCells(a);
    }
  }

  return (
    <div
      className={`outline-2 outline-neutral text-neutral outline ${
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
      {/* {index} */}
      {val < 0 ? "" : val + 1}
    </div>
  );
}

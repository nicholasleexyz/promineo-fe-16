const cells = [...Array(81)];

const blocks = [...Array(9).keys()].map((i) =>
  [...Array(9).keys()].map(
    (j) =>
      cells[Math.floor(j / 3) * 9 + (j % 3) + i * 3 + Math.floor(i / 3) * 18]
  )
);

function SudokuCell({ value }) {
  return (
    <div className="min-h-fit min-w-fit flex aspect-square justify-center items-center border-2 border-neutral p-1 text-2xl text-neutral-content">
      {value}
    </div>
  );
}

function SudokuCellBlock({ i, block }) {
  return (
    <div className="grid grid-cols-3 bg-primary">
      {block.map((cell, j) => (
        <SudokuCell key={i * 9 + j} value={i * 9 + j} />
      ))}
    </div>
  );
}

function SudokuGrid() {
  return (
    <div className="w-1/2 aspect-square min-w-fit min-h-fit grid grid-cols-3 gap-1 p-2 rounded-lg bg-secondary">
      {blocks.map((block, i) => (
        <SudokuCellBlock key={i} i={i} block={block} />
      ))}
    </div>
  );
}

export default function Temp() {
  return <SudokuGrid />;
}

export default function Temp() {
  const cells = [...Array(81)];

  const blocks = [...Array(9).keys()].map((i) =>
    [...Array(9).keys()].map(
      (j) =>
        cells[Math.floor(j / 3) * 9 + (j % 3) + i * 3 + Math.floor(i / 3) * 18]
    )
  );

  return (
    <div className="w-1/2 aspect-square min-w-fit min-h-fit grid grid-cols-3 gap-1 p-2 rounded-lg bg-secondary">
      {blocks.map((block, i) => {
        return (
          <div key={i} className="grid grid-cols-3 bg-primary">
            {block.map((cell, j) => {
              return (
                <div
                  className="min-h-fit min-w-fit flex aspect-square justify-center items-center border-2 border-neutral p-1 text-2xl text-neutral-content"
                  key={i * 9 + j}
                >
                  {i * 9 + j}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );

  // .cell:nth-child(3n):nth-child(-n + 6){
  // <div className="grid grid-cols-9 [&>*:nth-child(27n):nth-child(-n + 54)]:bg-white">
  // <div className="grid grid-cols-9">
  // <div className="grid grid-cols-9 [&>*:nth-child(n+46):nth-child(-n+54)]:bg-yellow-500">
  // <div className="aspect-square w-fit grid grid-cols-9 [&>*:nth-child(3n):not(:nth-child(9n))]:mr-2 [&>*:nth-child(n+19):nth-child(-n+27)]:bg-yellow-500 [&>*:nth-child(n+46):nth-child(-n+54)]:bg-yellow-500">
  //   {[...Array(81).keys()].map((i) => {
  //     // const left = "bor"
  //     return (
  //       <TempCell className="outline outline-slate-500" key={i} value={i} />
  //     );
  //   })}
  // </div>
}

const TempCell = ({ value }) => {
  return <div>{value}</div>;
};

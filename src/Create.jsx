export function Create() {
  return (
    <>
      {/* list all of the currently available puzzles */}
      {/* be able to select one of the available puzzles */}
      {/* load in the currently selected puzzle to a board */}
      {/* have a board to represent the currently selected puzzle */}

      {/* board */}
      <div className="flex h-screen w-100 items-center">
        <div className="board bg-red-500">
          {[...Array(81).keys()].map((i) => (
            <div
              key={i}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 cell bg-blue-500 border-green-900 border hover:bg-slate-500 "
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

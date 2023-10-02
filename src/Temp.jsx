import SudokuGridSandbox from "./components/SudokuGrid/SudokuGridSandbox";

export default function Temp() {
  return (
    <>
      <div className="grid grid-cols-1 w-full h-full justify-items-center place-content-center">
        <SudokuGridSandbox initCells={Array(81).fill(1)} />
      </div>
    </>
  );
}

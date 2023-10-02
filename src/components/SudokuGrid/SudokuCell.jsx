export default function SudokuCell({ value }) {
  return (
    <div className="min-h-fit min-w-fit flex aspect-square justify-center items-center border-2 border-neutral p-1 text-2xl text-neutral-content">
      {value}
    </div>
  );
}

import { PuzzleEntryButton } from "./PuzzleEntryButton";

export default function PuzzleList() {
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-full bg-neutral-content p-4 overflow-auto">
        {[...Array(100).keys()].map((i) => (
          <PuzzleEntryButton key={i} index={i} />
        ))}
      </div>
    </>
  );
}

import { PuzzleEntryButton } from "./PuzzleEntryButton";
import { usePuzzlesContext } from "../contexts/contexts";

export default function PuzzleList() {
  const { puzzles } = usePuzzlesContext();

  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-full min-h-16 bg-neutral-content p-4 overflow-auto">
        {puzzles.map((puzzle, i) => (
          <PuzzleEntryButton key={i} index={i}>
            {puzzle.name}
          </PuzzleEntryButton>
        ))}
      </div>
    </>
  );
}

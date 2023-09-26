import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { themeChange } from "theme-change";
// import { ThemeSwitcher } from "./ThemeSwitcher";
import { Game } from "./Game";
import { Create } from "./Create";

/*
  aabbbbbb
  aabbbbbb
  aabbbbbb

  a - navigation
  b - content

  navigation routes
  game
  puzzle selection 

  create
    update the puzzle "data base". (not persistent)

  info
    find a short description of the history of sudoku (maybe have gippity write it :P)

*/

export default function App() {
  useEffect(() => {
    themeChange(false);
  });

  return (
    <>
      <div className="layout bg-neutral-content text-neutral">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game></Game>} />
          <Route path="/create" element={<Create></Create>} />
        </Routes>
      </div>
    </>
  );
}

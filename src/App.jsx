import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
// import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { themeChange } from "theme-change";
// import { ThemeSwitcher } from "./ThemeSwitcher";
import { Game } from "./Game";
import { Create } from "./Create";
import { ThemeSwitcher } from "./ThemeSwitcher";

/*
  [ ] - Create // should be able to create new puzzles
  [x] - Read
  [ ] - Update // should be able to edit existing puzzles
  [ ] - Delete // should be able to delete puzzles


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
      <div className="bg-neutral-content text-neutral">
        {/* <NavBar></NavBar> */}

        <div className="layout w-100 drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}

            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden m-0.5 absolute top-0 left-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="text-3xl"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </label>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/game" element={<Game></Game>} />
              <Route path="/create" element={<Create></Create>} />
            </Routes>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}

              <li>
                <Link className="btn btn-secondary" to="/game">
                  Play
                </Link>
              </li>
              <li>
                <Link className="btn btn-secondary" to="/create">
                  Create
                </Link>
              </li>
              <li>
                <Link className="btn btn-secondary" to="/about">
                  Learn
                </Link>
              </li>
              <li>
                <ThemeSwitcher></ThemeSwitcher>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

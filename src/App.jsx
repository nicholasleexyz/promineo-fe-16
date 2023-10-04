import { Routes, Route, Link } from "react-router-dom";
import { History } from "./pages/History";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { ThemeSwitcher } from "./ThemeSwitcher";
import PuzzlesContextProvider from "./components/contexts/PuzzlesContextProvider";
import CurrentPuzzleInfoContextProvider from "./components/contexts/BoardContextProvider";
import PuzzleIndexContextProvider from "./components/contexts/PuzzleIndexContextProvider";
import Create from "./pages/Create";
import Game from "./pages/Game";
import { useGameContext } from "./components/contexts/contexts";

export default function App() {
  useEffect(() => {
    themeChange(false);
  });

  const { setGame } = useGameContext();

  const routes = [
    { path: "/", element: <Game />, title: "Game" },
    { path: "/create", element: <Create />, title: "Create" },
    { path: "/history", element: <History />, title: "History" },
  ];

  const [title, setTitle] = useState(
    routes.filter((route) => route.path == location.pathname)[0].title
  );

  return (
    <div className="bg-neutral text-neutral-content">
      <div className="drawer lg:drawer-open">
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
          <div className="w-full h-screen grid grid-flow-row grid-rows-6 grid-cols-1 ">
            {/* <div className="flex justify-center items-center text-6xl h-32 bg-accent text-base-content w-full"> */}
            <div className="flex justify-center items-center row-span-1 w-full h-full text-6xl bg-secondary text-secondary-content">
              {title}
            </div>
            <PuzzleIndexContextProvider>
              <PuzzlesContextProvider>
                <CurrentPuzzleInfoContextProvider>
                  <div className="flex justify-center items-center h-full w-full row-span-5">
                    <Routes>
                      {routes.map((route) => (
                        <Route
                          key={route.path}
                          path={route.path}
                          element={route.element}
                        />
                      ))}
                    </Routes>
                  </div>
                </CurrentPuzzleInfoContextProvider>
              </PuzzlesContextProvider>
            </PuzzleIndexContextProvider>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2 justify-center">
            {/* Sidebar content here */}
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  className="btn btn-secondary justify-start text-info-content"
                  to={route.path}
                  onClick={() => {
                    setTitle(route.title);
                    setGame(route.title == "Game");
                  }}
                >
                  {route.title}
                </Link>
              </li>
            ))}
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

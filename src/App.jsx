import { Routes, Route, Link } from "react-router-dom";
import { History } from "./pages/History";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Game } from "./pages/Game";
import { Create } from "./pages/Create";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Temp from "./Temp";

export default function App() {
  useEffect(() => {
    themeChange(false);
  });

  const routes = [
    { path: "/", element: <Game /> },
    { path: "/create", element: <Create /> },
    { path: "/history", element: <History /> },
    { path: "/temp", element: <Temp /> },
  ];

  return (
    <>
      <div className="bg-neutral text-neutral">
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
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}

              <li>
                <Link className="btn btn-secondary" to="/">
                  Play
                </Link>
              </li>
              <li>
                <Link className="btn btn-secondary" to="/create">
                  Create
                </Link>
              </li>
              <li>
                <Link className="btn btn-secondary" to="/history">
                  History
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

import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function NavBar() {
  return (
    // <nav className="navigation">
    // </nav>
    <div className="drawer lg:drawer-open w-fit">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden m-3.5"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <li>
            <Link className="btn btn-primary" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="btn btn-secondary" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="btn btn-secondary" to="/game">
              Game
            </Link>
          </li>
          <li>
            <ThemeSwitcher></ThemeSwitcher>
          </li>
        </ul>
      </div>
    </div>
  );
}

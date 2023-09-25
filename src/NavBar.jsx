import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="w-100 h-fit bg-slate-700 flex justify-around text-gray-200">
      <Link
        className="w-80 border-t-0 border-b-0 border-l-2 border-r-2 hover:border-dotted border-sky-500 flex-1 text-center"
        to="/"
      >
        Home
      </Link>
      <Link
        className="border-t-0 border-b-0 border-l-2 border-r-2 hover:border-dotted border-sky-500 flex-1 text-center"
        to="/about"
      >
        About
      </Link>
    </nav>
  );
}

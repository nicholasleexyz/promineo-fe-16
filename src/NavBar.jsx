import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="">
      <Link className="btn btn-primary" to="/">
        Home
      </Link>
      <Link className="btn btn-secondary" to="/about">
        About
      </Link>
      <button className="btn">asdf</button>
    </nav>
  );
}

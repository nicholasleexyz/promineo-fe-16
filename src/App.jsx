import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { NavBar } from "./NavBar";

export default function App() {
  return (
    <>
      <div className="pt-3.5 flex-col h-screen flex items-center bg-gray-600 text-xl">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

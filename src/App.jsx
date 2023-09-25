import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function App() {
  useEffect(() => {
    themeChange(false);
  });

  return (
    <>
      <div className="pt-3.5 flex-col h-screen flex items-center bg-gray-600 text-xl">
        <select data-choose-theme>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cupcake">Cupcake</option>
        </select>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

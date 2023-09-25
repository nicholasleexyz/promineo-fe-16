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
      <div className="pt-3.5 flex-col h-screen flex items-center text-xl">
        <select data-choose-theme className="mr-3.5 self-end">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="cupcake">Cupcake</option>
          <option value="coffee">Coffee</option>
          <option value="synthwave">Synthwave</option>
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

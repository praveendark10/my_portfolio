import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Header from "./layout/Header";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import _404 from "./pages/404";
import Underconstruction from "./pages/Underconstruction";
import Admin from "./pages/Admin";

//Loader
import Loader from "./layout/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    const update = (e) => {
      setX(e.x - 25);
      setY(e.y - 25);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  return (
    <>
      {/* {loading === false ? ( */}
        <Router basename="/">
          <Header />
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Underconstruction />} />
            <Route exact path="/*" element={<_404 />} />
            <Route exact path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      {/* ) : (
        <Loader />
      )}
      <div className="trackball" style={{ top: y, left: x }}></div> */}
    </>
  );
}

export default App;

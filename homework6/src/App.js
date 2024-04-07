import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./constants/route";
import Home from "./pages/Home";
import Universities from "./pages/Universities"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.universities} element={<Universities />} />
      </Routes>
    </div>
  );
}

export default App;

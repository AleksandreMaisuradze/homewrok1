import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/route";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.products} element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

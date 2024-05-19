import React from "react";
import "./reset.css";
import "./app.css"
import AppRoutes from "./AppRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;

import React from "react";
import "./reset.css";
import "./app.css"
import AppRoutes from "./AppRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
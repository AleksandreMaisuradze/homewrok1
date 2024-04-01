import React, { useState } from "react";
import "./App.css";
import "./reset.css";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="appDiv">
      {!showForm && <Form setShowForm={setShowForm} />}
      {showForm && <Users />}
    </div>
  );
}

export default App;

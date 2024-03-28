import React, { useState } from "react";
import "./App.css";
import "./reset.css";
import User from "./components/User";
import Form from "./components/Form";
import NextFive from "./components/NextFive";

function App() {
  const [showUser, setShowUser] = useState(false);
  const [showRest, setShowRest] = useState(false);

  return (
    <>
      {!showUser && <Form setShowUser={setShowUser} />}
      {showUser && <User setShowRest={setShowRest} />}
      {showRest && <NextFive />}
    </>
  );
}

export default App;

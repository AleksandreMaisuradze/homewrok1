import React, { useState } from "react";
import CountrySelector from "../components/CountrySelector";
import { useNavigate } from "react-router-dom";

function Home() {
  const [country, setCountry] = useState({ label: "", value: "" });
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/${country?.label}`);
  };

  return (
    <>
      <div>Select country to reach universities</div>
      <CountrySelector value={country} setValue={setCountry} />
      <button onClick={clickHandler}>Submit</button>
    </>
  );
}
export default Home;

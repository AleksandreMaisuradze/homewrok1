import React, { useState } from "react";
import CountrySelector from "../components/CountrySelector";
import { useNavigate } from "react-router-dom";
import routes from "../constants/route";

function Home() {
  const [country, setCountry] = useState({ label: "", value: "" });
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`${routes.universities}/${country?.label}`);
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

import React from "react";
import CountrySelector from "../components/CountrySelector";
import { useNavigate } from "react-router-dom";
import routes from "../constants/route";

function Home() {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(routes.universities)
    }
    return (
        <>
            <div>Select country to reach universities</div>
            <CountrySelector />
            <button onClick={clickHandler}>Submit</button>
        </>
    )
}
export default Home;

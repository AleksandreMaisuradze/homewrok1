import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/route";

function Home() {
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(routes.products)
    }

    return (

        <form onSubmit={submitHandler} >
            <input placeholder="email" ></input>
            <input placeholder="password" ></input>
            <button type="submit">Submit</button>
        </form>

    )
}

export default Home;
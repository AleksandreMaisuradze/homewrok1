import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/route";

function Home() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if (user.email === "random@gmail.com" && user.password === "random123") {
            navigate(routes.products)
        }
    }

    return (

        <form onSubmit={submitHandler} >
            <input placeholder="email" onChange={(e) => {
                setUser(prev => ({ ...prev, email: e.target.value }))
            }} ></input>
            <input placeholder="password" onChange={(e) => {
                setUser(prev => ({ ...prev, password: e.target.value }))
            }} ></input>
            <button type="submit">Submit</button>
        </form>

    )
}

export default Home;
import React from "react";
import appRoutes from "../../constants/appRoutes";
import { useNavigate } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    const navigate = useNavigate()
    const navRoutes = Object.entries(appRoutes)

    return (
        <nav className="navbar">
            {navRoutes.map((route) => {
                const [key, value] = route

                return <li onClick={() => {
                    navigate(value)
                }} key={key} className="nav_li" >{key}</li>
            })}

        </nav>
    )
}

export default Navbar;
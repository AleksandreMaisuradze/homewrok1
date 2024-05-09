import React from "react";
import appRoutes from "../../constants/appRoutes";
import { useNavigate } from "react-router-dom";
import "./navbar.css"
import { useAppContext } from "../../context/AppContextProvider";
import { userSignOut } from "../../context/AppActionsCreator";

function Navbar() {
    const navigate = useNavigate()
    const navRoutes = Object.entries(appRoutes)
    const { state, dispatch } = useAppContext()
    console.log(navRoutes);
    if (state.isUserLoggedIn) {
        navRoutes.pop()
    }
    if (state.isUserLoggedIn) {
        navRoutes.pop()
    }   // სლაისით ვერაფრით ვერ ამოვჭერი ბოლო 2 :დ
    return (
        <nav className="navbar">

            {navRoutes.map((route) => {
                const [key, value] = route

                return <li onClick={() => {
                    navigate(value)
                }} key={key} className="nav_li" >{key}</li>
            })}
            {state.isUserLoggedIn && <button onClick={() => {
                dispatch(userSignOut())
            }} className="navButton" >Sign Out</button>}
        </nav>
    )
}

export default Navbar;
import React from "react"
import HomeCarousel from "../../components/carousel/Carousel";
import Button from 'react-bootstrap/Button';
import "./home.css"
import { useNavigate } from "react-router-dom";
import appRoutes from "../../constants/appRoutes";
import { useAppContext } from "../../context/AppContextProvider";


function Home() {
    const { state } = useAppContext()
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(appRoutes.Registration)
    }
    return (
        <>
            <HomeCarousel />
            {!state.isUserLoggedIn && <Button variant="primary" className="homeButton" onClick={clickHandler} >Register Now</Button>}
        </>
    )
}

export default Home;
import React from "react"
import HomeCarousel from "../../components/carousel/Carousel";
import Button from 'react-bootstrap/Button';
import "./home.css"
import { useNavigate } from "react-router-dom";
import appRoutes from "../../constants/appRoutes";


function Home() {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(appRoutes.Registration)
    }
    return (
        <>
            <HomeCarousel />
            <Button variant="primary" className="homeButton" onClick={clickHandler} >Registration</Button>
        </>
    )
}

export default Home;
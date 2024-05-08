import React from "react";
import useFetch from "../../hooks/useFetch";
import MovieCard from "../../components/moviecard/MovieCard";
import { useAppContext } from "../../context/AppContextProvider";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import appRoutes from "../../constants/appRoutes";
import "./movies.css"


function Movies() {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(appRoutes.Registration)
    }

    const logInClickHandler = () => {
        navigate(appRoutes.LogIn)
    }

    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '35132a3c9emsh8b8c74e98a11359p1ae07djsnffce8cb5bba0',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    const [movies, moviesFetchError, isMoviesDataLoading] = useFetch(url, options)
    console.log(movies);
    const { state } = useAppContext()

    if (moviesFetchError) {
        return (
            <div style={{ color: "red", fontSize: "48px" }}>Fetch error</div>
        )
    }

    if (isMoviesDataLoading) {
        return (
            <div style={{ fontSize: "48px", textAlign: "center" }} >
                Loading...
            </div>)
    }

    if (state.isUserLoggedIn) {
        return (
            <div className="movieCardWrapper" >
                {movies.map(movie => <MovieCard key={movie.rank} data={movie} />)}
            </div>
        )
    }
    return (
        <div>
            <div className="logInDiv" >
                <p>Please log in to see movies</p>
                <Button variant="primary" className="registrationButton" onClick={logInClickHandler} >Log in</Button>

            </div>
            <div className="registerDiv" >
                <p>If you don`t have account register </p>
                <Button variant="primary" className="registrationButton" onClick={clickHandler} >Register Now</Button>
            </div>
        </div>
    )
}

export default Movies;
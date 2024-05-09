import React from "react";
import useFetch from "../../hooks/useFetch";
import MovieCard from "../../components/moviecard/MovieCard";
import "./movies.css"
import { useAppContext } from "../../context/AppContextProvider";


function Movies() {

    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '35132a3c9emsh8b8c74e98a11359p1ae07djsnffce8cb5bba0',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    const [movies, moviesFetchError, isMoviesDataLoading] = useFetch(url, options)

    const { state } = useAppContext()
    console.log(state);

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

    return (
        <div className="movieCardWrapper" >
            {movies.map(movie => <MovieCard key={movie.rank} data={movie} />)}
        </div>
    )
}

export default Movies;
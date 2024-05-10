import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./moviesDetail.css"

function MoviesDetail() {

    const { movieID } = useParams()
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(-1)
    }

    const url = `https://imdb-top-100-movies.p.rapidapi.com/top${movieID}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '35132a3c9emsh8b8c74e98a11359p1ae07djsnffce8cb5bba0',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    const [movies, moviesFetchError, isMoviesDataLoading] = useFetch(url, options)

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
        <div className="detailsWrapper" >
            <div className="detailsCard" >
                {<img src={movies.image} />}
                <div>
                    <p><span>Title: </span>{movies.title}</p>
                    <p><span>Year: </span>{movies.year}</p>
                    <p><span>Genre: </span>{movies.genre.join(", ")}</p>
                    <p><span>Director: </span>{movies.director.join(", ")}</p>
                    <p><span>Writers: </span>{movies.writers.join(", ")}</p>
                    <p><span>Description: </span>{movies.description}</p>
                    <p><span>Rating: </span>{movies.rating}</p>
                    <button className="registrationButton" ><a href={movies.trailer} target="blank">Watch Trailer</a></button>

                </div>

            </div>
            <button onClick={clickHandler} className="registrationButton" >Back</button>

        </div>
    )
}

export default MoviesDetail;
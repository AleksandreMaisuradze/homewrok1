import { useNavigate } from "react-router-dom";
import "./movieCard.css"
import appRoutes from "../../constants/appRoutes";

function MovieCard({ data }) {

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`${appRoutes.Movies}/${data.rank}`)
    }

    return (
        <div className="movieCard">
            <h1 className="movieCardTitle">{data.title}</h1>
            <img src={data.image} className="movieCardImage" onClick={clickHandler} />
        </div>
    )
}

export default MovieCard;
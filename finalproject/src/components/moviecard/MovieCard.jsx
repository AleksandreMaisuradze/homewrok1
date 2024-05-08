import "./movieCard.css"

function MovieCard({ data }) {
    return (
        <div className="movieCard">
            <h1 className="movieCardTitle">{data.title}</h1>
            <img src={data.image} className="movieCardImage" />
        </div>
    )
}

export default MovieCard;
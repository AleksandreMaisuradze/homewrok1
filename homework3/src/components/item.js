export default function Item({title, url, stock, rating, action, lifestyle}) {
    return (
        <div className="shopping-item">
            <h3>{title}</h3>
            <img src={url} alt='image'></img>
            <div className="description">
                <span>{stock}</span>
                <span>{rating}</span>
            </div>
            <div className="badges">
                <span className="badge-1">{action}</span>
                <span className="badge-2">{lifestyle}</span>
            </div>
            <button>Add To Cart</button>
        </div>
    )
}
import React from "react";

function Product({ data }) {
    return (
        <>
            <h1>{data.title}</h1>
            <img src={data.images[3]} alt="image"></img>
            <button>ADD TO CART</button>
        </>

    )
}

export default Product;
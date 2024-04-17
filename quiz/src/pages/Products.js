import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import Product from "../components/Product";

function Products() {

    const { state, buttonCount, setSkip } = useAppContext()


    if (state.ProductDataFetchingError) {
        return (
            <h1>
                Error
            </h1>
        )
    }

    if (state.isProductDataFetching) {
        return (
            <h1>
                Loading...
            </h1>
        )
    }

    return (
        <>
            <div>
                {state.products.products.map((product) => <Product key={product.id} data={product} />)}
            </div>
            {buttonCount.map((count) => <button onClick={() => {
                setSkip(count)
                window.scrollTo(0, 0)
            }} key={count} >{count}</button>)}
        </>
    )
}

export default Products;
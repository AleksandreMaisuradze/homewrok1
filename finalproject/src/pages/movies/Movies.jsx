import React from "react";
import { useAppContext } from "../../context/AppContextProvider";

function Movies() {
    const { state } = useAppContext()
    console.log(state);

    return (
        <div>
            Movies
        </div>
    )
}

export default Movies;
import React, { useState } from "react";
import Portal from "./Portal";

function Post({ data, deletePost }) {
    const [showPortal, setShowPortal] = useState(false)
    const clickHandler = () => {
        setShowPortal(true)

    }

    const clickHandlerNo = () => {
        setShowPortal(false)
    }

    const clickHandlerYes = () => {
        deletePost(data.id)
        setShowPortal(false)
    }

    return (
        <div>
            <p>N{data.id}</p>
            <p>userId: {data.userId}</p>
            <p>{data.title}</p>
            <p>{data.body}</p>
            <button onClick={clickHandler}>Delete post</button>
            {showPortal && <Portal clickHandlerNo={clickHandlerNo} clickHandlerYes={clickHandlerYes} />}
        </div>
    )
}

export default Post;
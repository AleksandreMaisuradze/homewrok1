import React from "react"

export function Form() {
    
    function refresh(e) {
        e.preventDefault()
    }
    return (
        <form onSubmit={refresh}>
            <input type="text"></input>
            <input type="email"></input>
            <button type="submit" disabled="">Render Users</button>
        </form>
    )
}
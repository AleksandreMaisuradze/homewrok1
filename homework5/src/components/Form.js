import React, { useState } from "react";
export default function Form({ setShowForm }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    let isDisabled = user.email === "digitalAcademy@gmail.com" && user.password === "iLoveReact123" ? false : true

    function refresh(e) {
        e.preventDefault()

    }

    function hideForm() {
        setShowForm(true)
    }


    return (
        <form onSubmit={refresh}>
            <input type="email" placeholder="enter email" onChange={(e) => {
                setUser(prev => ({ ...prev, email: e.target.value }))
            }}></input>
            <input type="text" placeholder="enter password" onChange={(e) => {
                setUser(prev => ({ ...prev, password: e.target.value }))
            }}></input>
            <button type="submit" disabled={isDisabled} onClick={hideForm}>Render Users</button>
            
        </form >
    )
}

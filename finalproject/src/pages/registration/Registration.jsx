import React, { useState } from "react";
import inputs from "../../constants/inputs";
import MyInputs from "../../components/input/MyInputs";
import { register } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../constants/appRoutes";
import "./registration.css"

function Registration() {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState("")

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        register(user).then((data) => {
            navigate(appRoutes.LogIn, { state: { success: true } })
        }).catch((err) => {
            setError(err.message)
        })
    }

    return (
        <div className="formWrapper">
            <form onSubmit={submitHandler} className="registrationForm" >
                {inputs.map((input) => (
                    <MyInputs setUser={setUser} key={input.name} data={input} />
                ))}
                <button className="registrationButton" >Submit</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default Registration;
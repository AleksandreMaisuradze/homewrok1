import React, { useState } from "react";
import { logInInput } from "../../constants/inputs";
import MyInputs from "../../components/input/MyInputs";
import { login } from "../../api/auth";
import { useLocation, useNavigate } from "react-router-dom";
import appRoutes from "../../constants/appRoutes";
import { useAppContext } from "../../context/AppContextProvider";
import { userSignin } from "../../context/AppActionsCreator";

function LogIn() {

    const [user, setUser] = useState({
        userName: "",
        password: "",
    })

    const [error, setError] = useState("")

    const navigate = useNavigate()

    const location = useLocation()

    const { dispatch } = useAppContext()

    const submitHandler = (e) => {
        e.preventDefault();
        login(user).then((data) => {
            dispatch(userSignin(data.token))
            navigate(appRoutes.Movies)
        }).catch((err) => {
            setError(err.message)
        })
    }

    return (
        <>
            <div>
                {location?.state?.success && <p style={{ textAlign: "center", fontSize: "30px", color: "green" }}>Succesfully registered</p>}
            </div>
            <div className="formWrapper">
                <form onSubmit={submitHandler} className="registrationForm" >
                    {logInInput.map((input) => (
                        <MyInputs setUser={setUser} key={input.name} data={input} />
                    ))}
                    <button className="registrationButton" >Submit</button>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </>
    )
}

export default LogIn;
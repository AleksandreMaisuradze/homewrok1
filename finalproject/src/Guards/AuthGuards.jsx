import { useNavigate } from "react-router-dom"
import appRoutes from "../constants/appRoutes"
import { useAppContext } from "../context/AppContextProvider"
import Button from 'react-bootstrap/Button';


const AuthGuards = ({ children }) => {

    const { state } = useAppContext()
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(appRoutes.Registration)
    }

    const logInClickHandler = () => {
        navigate(appRoutes.LogIn)
    }

    if (!state.isUserLoggedIn) {
        return (
            <div>
                <div className="logInDiv" >
                    <p>Please log in to see movies</p>
                    <Button variant="primary" className="registrationButton" onClick={logInClickHandler} >Log in</Button>

                </div>
                <div className="registerDiv" >
                    <p>If you don`t have account register </p>
                    <Button variant="primary" className="registrationButton" onClick={clickHandler} >Register Now</Button>
                </div>
            </div>
        )
    }

    return (
        <>{children}</>
    )
}

export default AuthGuards;